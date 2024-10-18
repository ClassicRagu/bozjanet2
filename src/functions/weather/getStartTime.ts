// This code was ripped directly from eorzea-weather
export const getStartTime = (date: Date): Date => {
  const oneHour = 175 * 1000;
  const msec = date.getTime();
  // % 24 for an entire day, % 8 for a single window
  const bell = (msec / oneHour) % 8;
  const startMsec = msec - Math.round(oneHour * bell);
  return new Date(startMsec);
};