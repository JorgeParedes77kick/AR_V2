import dayjs from 'dayjs';

export const DATE = {
  YYYYMMDD: 'YYYYMMDD',
  YYYY_MM_DD: 'YYYY-MM-DD',
  DDMMYYYY: 'DDMMYYYY',
  DD_MM_YYYY: 'DD-MM-YYYY',
};

export const FormatFecha = (fecha, type, DateTypeIn = DATE.YYYY_MM_DD) => {
  if (![1, 2, 3].includes(type)) return fecha;
  const fechaJs = dayjs(fecha, DateTypeIn);
  if (!fechaJs.isValid()) return fecha;

  const FechaFormat = {
    1: fechaJs.format(DATE.YYYYMMDD),
    2: fechaJs.format(DATE.DDMMYYYY),
    3: fechaJs.format(DATE.DD_MM_YYYY),
  };
  return FechaFormat[type];
};

