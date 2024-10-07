export const getWeather = (hash: number) => {
  //const rates = weatherRates[partition.weatherRates[place][weatherRateIndex]].rates
  const rates = [
    ["Fair Skies", 12],
    ["Showers", 22],
    ["Gloom", 22],
    ["Thunderstorms", 22],
    ["Snow", 22],
  ];
  let cumChance = 0;
  for (const [weather, chance] of rates) {
    if ((cumChance += <number>chance) > hash) {
      return weather;
    }
  }
  return "nothing";
};
