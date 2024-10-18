// This code was ripped directly from eorzea-weather
export const getStartTime = (date: Date): Date => {
  const oneHour = 175 * 1000;
  const msec = date.getTime();
  const bell = (msec / oneHour) % 24;
  const startMsec = msec - Math.round(oneHour * bell);
  return new Date(startMsec);
};