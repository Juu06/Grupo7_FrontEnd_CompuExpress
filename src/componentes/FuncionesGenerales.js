import _ from 'lodash';
import Moment from 'moment';

export const isArrayEqual = (x, y) => {
  if (x?.length !== y?.length) {
    return false;
  }
  return _(x).differenceWith(y, _.isEqual).isEmpty();
};

export const getArrayFilter = (filterObj) =>
  Object.entries(filterObj)
    .filter(([_, filtro]) =>
      Boolean(
        filtro?.Property?.value &&
          filtro?.Operator?.value &&
          filtro?.Value?.filter((values) => values.length > 0).length > 0
      )
    )
    .map(([_, filtro]) => ({
      Property: filtro.Property.value,
      Operator: filtro.Operator.value,
      Value: filtro.Value,
    }));

export const getSort = (sortObj) => {
  if (sortObj?.propiedad !== undefined && sortObj?.asc !== undefined) {
    return [
      { Property: sortObj.propiedad, Direction: sortObj.asc ? 'ASC' : 'DESC' },
    ];
  }
  return [];
};

export const getFileBase64 = (fileContent, fileName) => {
  const linkSource = `data:application/octet-stream;base64,${fileContent}`;
  const downloadLink = document.createElement('a');

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();

  document.body.appendChild(downloadLink);

  window.URL.revokeObjectURL(downloadLink.href);
  downloadLink.parentNode.removeChild(downloadLink);

  return false;
};

export const printIt = (printThis) => {
  /* const originalContents = document.body.innerHTML;
    document.body.innerHTML = printThis;
    window.print();
    document.body.innerHTML = originalContents; */
  let win = window.open();
  win.document.write(printThis);
  win.document.close();
  win.print();
  win.close();

  return false;
};

export const getCustomScrollBar = () => ({
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  '&::-webkit-scrollbar': {
    width: 4,
    height: 4,
    backgroundColor: '#f5f5f5',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 2,
    backgroundColor: '#70707073',
  },
});

export const parseDateMoment = (date, dateFormat = 'dateFull') => {
  const formatDates = {
    dateFull: 'DD/MM/YYYY HH:mm',
    dateNoHours: 'DD/MM/YYYY',
    dateReverse: 'YYYY/MM/DD',
    dateHours: 'hh:mm:ss',
    dateReverseFull: 'YYYY/MM/DD HH:mm:ss',
    dateFullGo: 'yyyy-MM-DDThh:mmZ',
    dateComplete: 'yyyy-MM-DDThh:mm:ss',
  };
  if (date) {
    const dateObj = Moment(date);
    if (dateObj.unix() > 0) {
      return dateObj.format(formatDates[dateFormat]);
    }
  }
  return '';
};

export const camelCaseToString = (camelCase) =>
  camelCase.replace(/([A-Z])/g, ' $1').trim();
