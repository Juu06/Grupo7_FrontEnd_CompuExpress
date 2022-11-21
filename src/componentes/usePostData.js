import axios from "axios";
import { useEffect, useState } from "react";
import { useAsyncError } from "./HooksGenerales";
import { useSnackbar } from "notistack";

const usePostData = ({
  url = null,
  params = null,
  onError = () => null,
  onException = () => null,
  onSuccess = () => null,
  send = false,
  setSend = () => null,
  consoleDebug = false,
  hideSnackBar = {
    onSuccess: false,
    onError: false,
  },
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const throwError = useAsyncError(); // para lanzar excepciones

  const cleanData = () => setData(null); //Posible problema al actualizar estado y no estar montado el hook

  useEffect(() => {
    if (consoleDebug) console.log({ url, params, send });
    let isActive = true;

    const updateState = (hook) => (newValue) => {
      if (!isActive) return;
      hook(newValue);
    };

    const setIsLoadingThrottled = updateState(setIsLoading);
    const setErrorThrottled = updateState(setError);
    const setDataThrottled = updateState(setData);
    const setSendThrottled = updateState(setSend);

    const postData = async () => {
      if (url === null || params === null || send !== true) return;
      setIsLoadingThrottled(true);
      const response = await axios
        .post(url, params, {
          headers: {},
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          setErrorThrottled(true);
          return error.response; //TODO: falta manejar errores de conexión
        });

      if (response?.status === 200 && response?.data !== "") {
        if (response?.data?.Response?.Code === 200) {
          if (!hideSnackBar?.onSuccess) {
            enqueueSnackbar(
              <div
                dangerouslySetInnerHTML={{
                  __html: response?.data?.Response?.Message,
                }}
              />,
              {
                variant: "success",
              }
            );
          }
          onSuccess(response?.data);
        } else {
          if (!hideSnackBar?.onError) {
            enqueueSnackbar(
              <div
                dangerouslySetInnerHTML={{
                  __html: response?.data?.Response?.Message,
                }}
              />,
              {
                variant: "error",
              }
            );
          }
          onError(response?.data);
        }
        setErrorThrottled(false);
        setDataThrottled(response?.data);
      } else {
        setErrorThrottled(true);
        onException(response?.data);
        throwError(new Error("Error Asincrónico: " + JSON.stringify(response)));
      }
      setIsLoadingThrottled(false);
      setSendThrottled(false);
    };
    postData();

    return () => {
      isActive = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);

  return { data, error, isLoading, cleanData };
};

export default usePostData;
