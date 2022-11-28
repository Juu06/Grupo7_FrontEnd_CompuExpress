import { useCallback, useRef, useState, useEffect } from 'react';
import {
  getArrayFilter,
  getFileBase64,
  isArrayEqual,
} from './FuncionesGenerales';
//import makeStyles from '@mui/styles/makeStyles';
import { Box, CircularProgress, Typography } from '@mui/material';
import debounce from 'lodash.debounce';
import { useSnackbar } from 'notistack';
import useGetData from './useGetData';
import { useSelector } from 'react-redux';
import _ from 'lodash';
//import { getIcono, listaIconos } from 'Componentes/Iconos/Iconos/Iconos';

export const usePaginacion = () => {
  const [base, setBase] = useState(0);
  const [numeroFilas, setNumeroFilas] = useState(50);

  const [pagina, setPagina] = useState(0);

  const clearPaginacion = () => {
    setBase(0);
    setNumeroFilas(50);
    setPagina(0);
  };

  useEffect(() => {
    setBase(0);
    setPagina(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numeroFilas]);

  const handlePageSizeChange = (newSize) => {
    setNumeroFilas(newSize);
    setPagina(0);
    setBase(0);
  };

  const handlePageChange = (newPage) => {
    setPagina(newPage);
    if (newPage === 0) {
      setBase(0);
    } else {
      setBase(newPage * numeroFilas);
    }
  };

  return {
    base,
    numeroFilas,
    handlePageChange,
    pagina,
    handlePageSizeChange,
    clearPaginacion,
  };
};

export const useGetFilterArray = (filterObj, onFilterChange = () => null) => {
  const [arrayFilter, setArrayFilter] = useState(getArrayFilter(filterObj));

  const previousFilterArrayRef = useRef();
  const previousFilterArray = previousFilterArrayRef.current; // para guardar el valor previo

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSetArrayFilter = useCallback(
    debounce((newParams) => {
      setArrayFilter((_) => {
        //! Investigar colas en los cambios de usestate
        onFilterChange(newParams);
        return newParams;
      });
    }, 400),
    []
  );

  const updateFilterArray = () => {
    const newFilterArray = getArrayFilter(filterObj);
    if (
      !isArrayEqual(newFilterArray, previousFilterArray) &&
      !isArrayEqual(newFilterArray, arrayFilter)
    ) {
      debounceSetArrayFilter(newFilterArray);
    }
  };

  updateFilterArray(); // para actualizar el valor

  useEffect(() => (previousFilterArrayRef.current = getArrayFilter(filterObj))); // para actualizar el valor previo

  return arrayFilter;
};

export const useFilter = (filterObj, color) => {
  /* const useStyles = makeStyles((theme) => ({
    badge: {
      '& .MuiBadge-badge': {
        minWidth: '15px',
        height: '15px',
        padding: 0,
        right: -3,
        top: 5,
      },
      height: '100%',
      alignItems: 'center',
    },
    boton: {
      color: 'white',
      '& svg': {
        fontSize: 16,
      },
      '&:hover path': {
        fill: theme.palette.secondary.main,
      },
      border: 'none',
    },
  }));
  const classes = useStyles(); */

  const [openFiltro, setOpenFiltro] = useState(false);
  const handleToggle = () => setOpenFiltro((prev) => !prev);
  const handleClose = () => setOpenFiltro(false);

  const filterRef = useRef(null);

  /* const getCompleteFilters = () => {
    return Object.entries(filterObj)
      .map(([_, objFilter]) =>
        Boolean(
          objFilter?.Property?.value &&
            objFilter?.Operator?.value &&
            objFilter?.Value?.filter((values) => values.length > 0).length > 0
        )
      )
      .reduce((prev, current) => (current ? prev + 1 : prev), 0);
  }; */

  /* const icono = (
    <Badge
      color="warning"
      badgeContent={getCompleteFilters()}
      className={classes.badge}
    >
      {getIcono(listaIconos.filter)}
    </Badge>
  ); */

  return {
    //icono,
    handleToggle,
    handleClose,
    openFiltro,
    filterRef,
  };
};

export const useAsyncError = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setError] = useState();
  return useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};

export const useSortObj = (initialState = {}) => {
  const [sortObj, setSortObj] = useState(initialState);

  const [sortModel, setSortModel] = useState([]);

  const handleSortModelChange = (newModel) => {
    if (newModel.length === 0) {
      setSortModel([]);
      setSortObj({});
    }
    if (sortModel.length > 0 && newModel.length > 0) {
      if (
        newModel[0].field === sortModel[0].field &&
        newModel[0].sort === sortModel[0].sort
      ) {
        return;
      }
      setSortModel(newModel);
      setSortObj({
        propiedad: newModel[0].field,
        asc: newModel[0].sort === 'asc',
      });
    }
    if (sortModel.length === 0 && newModel.length > 0) {
      setSortModel(newModel);
      setSortObj({
        propiedad: newModel[0].field,
        asc: newModel[0].sort === 'asc',
      });
    }
  };

  const getSort = (sortObj) => {
    if (sortObj?.propiedad !== undefined && sortObj?.asc !== undefined) {
      return [
        {
          Property: sortObj.propiedad,
          Direction: sortObj.asc ? 'ASC' : 'DESC',
        },
      ];
    }
    return [];
  };

  const clearSort = () => {
    setSortObj({});
    setSortModel([]);
  };

  return {
    sortParseado: getSort(sortObj),
    sortModel,
    handleSortModelChange,
    clearSort,
  };
};

export const useDownloadFile = ({ url, params = {} }) => {
  const [downloadId, setDownloadId] = useState(null);
  const [dynamicParams, setDynamicParams] = useState({});

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { isLoading } = useGetData({
    url: url,
    forceUpdateId: downloadId,
    params: { ...params, ...dynamicParams },
    onSuccess: (response) => {
      setDownloadId(null);
      getFileBase64(response.Data.FileContent, response.Data.FileName);
      closeSnackbar('descargandoArchivo');
      enqueueSnackbar('Descargado con éxito!', {
        variant: 'success',
      });
    },
    onError: () => {
      setDownloadId(null);
      closeSnackbar('descargandoArchivo');
      enqueueSnackbar('Error al descargar', { variant: 'error' });
    },
  });

  const download = (extraParams = {}) => {
    if (isLoading) {
      enqueueSnackbar('Hay otra descarga en curso', {
        variant: 'warning',
      });
      return;
    }
    setDynamicParams(extraParams);
    setDownloadId(1);
    enqueueSnackbar(
      <Box style={{ display: 'flex', alignContent: 'center', gap: '50px' }}>
        <Typography>Descargando...</Typography>
        <CircularProgress size={20} />
      </Box>,
      {
        variant: 'info',
        persist: true,
        key: 'descargandoArchivo',
      }
    );
  };

  return { download };
};

export const usePrintFileGet = ({ url, params = {} }) => {
  const [PrintId, setPrintId] = useState(null);
  const [dynamicParams, setDynamicParams] = useState({});

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function printIt(printThis) {
    var win = window.open();
    win.document.write(printThis);
    win.document.close();
    win.print();
    win.close();
  }

  const { isLoading } = useGetData({
    url: url,
    forceUpdateId: PrintId,
    params: { ...params, ...dynamicParams },
    onSuccess: (response) => {
      setPrintId(null);
      printIt(response.Data);
      //getFileBase64(response.Data.FileContent, getFilename(response));
      closeSnackbar('imprimiendoArchivo');
    },
    onError: () => {
      setPrintId(null);
      closeSnackbar('imprimiendoArchivo');
      enqueueSnackbar('Error al imprimir', { variant: 'error' });
    },
  });

  const Print = (extraParams = {}) => {
    if (isLoading) {
      enqueueSnackbar('Hay otra impresion en curso', {
        variant: 'warning',
      });
      return;
    }
    setDynamicParams(extraParams);
    setPrintId(1);
    enqueueSnackbar(
      <Box style={{ display: 'flex', alignContent: 'center', gap: '50px' }}>
        <Typography>Imprimiendo...</Typography>
        <CircularProgress size={20} />
      </Box>,
      {
        variant: 'info',
        persist: true,
        key: 'imprimiendoArchivo',
      }
    );
  };

  return { Print };
};

export const useMenus = () => {
  const [menuAnchorlEl, setMenuAnchorlEl] = useState(null);

  const [menuProps, setMenuProps] = useState({});

  const handleClick = (event, menuProps) => {
    setMenuAnchorlEl(event.currentTarget);
    setMenuProps(menuProps);
  };
  const handleClose = () => setMenuAnchorlEl(null);

  return { handleClick, handleClose, menuAnchorlEl, menuProps };
};

export const useGetEnabledActionByRole = (herramientas) => {
  const arrayRoles = useSelector((store) => store).usuario.currentRole;

  return Object.fromEntries(
    Object.entries(herramientas).map(([name, value]) => [
      name,
      _.intersection(arrayRoles.map((rol) => rol[0]).flat(), value).length > 0,
    ])
  );
};
export const useGetEnabledActionByOnlyRead = (herramientas) => {
  const arrayRoles = useSelector((store) => store).usuario.currentRole;
  return Object.fromEntries(
    Object.entries(herramientas).map(([name, value]) => [
      name,
      _.intersection(
        arrayRoles.map((rol) => rol[0] + '-' + rol[1]).flat(),
        value
      ).length > 0,
    ])
  );
};
