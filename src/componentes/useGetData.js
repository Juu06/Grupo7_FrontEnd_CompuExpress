import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useAsyncError } from './HooksGenerales';
//import { useSnackbar } from 'notistack';

const useGetData = ({
  url = null,
  params = {},
  eliminarCancelToken = null,
  forceUpdateId = null,
  onError = () => null,
  onException = () => null,
  onSuccess = () => null,
  responseType = null,
  consoleDebug = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [internalForceUpdateId, setInternalForceUpdateId] = useState(null);

  const updateIdCall = (idCall) => {
    if (idCall !== undefined) return setInternalForceUpdateId(idCall);
    return setInternalForceUpdateId((prev) => prev + 1);
  };

  const throwError = useAsyncError(); // para lanzar excepciones
  const stringifyParams = JSON.stringify(params); // para lanzar el useEffect

  const newTokenCancelableReference = useRef();

  const cancelRequest = () =>
    //TODO: deprecar opcion para utilizar el clearIdCall
    newTokenCancelableReference.current?.cancel('CancelToken');

  const cleanData = () => setData(null); //Posible problema al actualizar estado y no estar montado el hook

  //const { enqueueSnackbar } = useSnackbar();

  // const [newValue, setNewValue] = useState(null);

  // console.log(newValue);
  useEffect(() => {
    if (consoleDebug) console.log({ url, params, forceUpdateId });

    let isActive = true;

    const updateState = (hook) => (newValue) => {
      if (!isActive) return;
      hook(newValue);
    };

    const setIsLoadingThrottled = updateState(setIsLoading);
    const setErrorThrottled = updateState(setError);
    const setDataThrottled = updateState(setData);

    const sendRequest = async (tokenCancelable) => {
      if (
        url === null ||
        (forceUpdateId === null && internalForceUpdateId === null)
      )
        return;
      setIsLoadingThrottled(true);

      const llamada = tokenCancelable
        ? axios.get(url, {
            headers: {},
            responseType,
            params,
          })
        : axios.get(url, {
            headers: {},
            responseType,
            params,
            cancelToken: tokenCancelable,
          });
      const response = await llamada
        .then((response) => response)
        .catch((error) => {
          if (error?.message !== 'CancelToken') setErrorThrottled(true); // TODO: falta manejar errores de conexion

          setIsLoadingThrottled(false);
          return null;
        });

      // En caso de error de conexion se retorna null y se llama a la funcion on error

      //TODO: mejorar manejo de respuestas segun nivel de errores a http y codigo interno

      /* if (response === null) {
        enqueueSnackbar('Se cayó la conexion, intente nuevamente mas tarde', {
          variant: 'error',
        });
      } */
      if (response) {
        if (consoleDebug) console.log(response);
        setIsLoadingThrottled(false);
        if (response.status === 200 && response.data !== '') {
          setErrorThrottled(false);
          setDataThrottled(response.data);
          if (response?.data?.Response?.Code === 200) {
            onSuccess(response.data);
          } else {
            onError(response.data);
          }
        } else {
          setErrorThrottled(true);
          onException(response.data);
          throwError(
            new Error('Error Asincrónico: ' + JSON.stringify(response))
          );
        }
      } else {
        setErrorThrottled(true);
        onError();
      }
    };

    newTokenCancelableReference.current = axios.CancelToken.source();
    const newTokenCancelable = newTokenCancelableReference.current;
    if (eliminarCancelToken) sendRequest(null);
    if (!eliminarCancelToken) sendRequest(newTokenCancelable.token);
    return () => {
      newTokenCancelable.cancel('CancelToken');
      setIsLoadingThrottled(false);
      isActive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    url,
    stringifyParams,
    forceUpdateId,
    responseType,
    internalForceUpdateId,
  ]);

  return {
    isLoading,
    error,
    data,
    cleanData,
    cancelRequest,
    updateIdCall,
  };
};

export default useGetData;
