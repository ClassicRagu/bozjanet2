import { hydatosWeather } from "@/static/weather/Weather/HydatosXIVAPI";
import { pagosWeather } from "@/static/weather/Weather/PagosXIVAPI";
import { pyrosWeather } from "@/static/weather/Weather/PyrosXIVAPI";
import { ChanceMap } from "@/types/weather/ChanceMap";
import { RateMap } from "@/types/weather/RateMap";
import { WeatherMap } from "@/types/weather/WeatherMap";

//Get the WeatherRate sheet for each zone
const getZone = (zone: string) => {
  switch(zone) {
    case "Hydatos":
      return hydatosWeather
    case "Pagos":
      return pagosWeather
    case "Pyros":
      return pyrosWeather
    default:
      return hydatosWeather
  }
}

// Construct an array with the weather name and the rate
const constructRates = (zone: string): RateMap[] => {
  const zoneFields = getZone(zone)
  const rateMap = zoneFields.fields.Rate.map((x, index) =>{
    return {weather: zoneFields.fields.Weather[index].fields.Name, rate: x}
  })
  return rateMap
}

// This code was ripped directly from eorzea-weather
export const getChance = (date: Date): ChanceMap => {
  const unixtime = Math.floor(date.getTime() / 1000);
  // Get Eorzea hour for weather start
  const bell = unixtime / 175;

  // Do the magic 'cause for calculations 16:00 is 0, 00:00 is 8 and 08:00 is 16
  const increment = (bell + 8 - (bell % 8)) % 24;

  // Take Eorzea days since unix epoch
  let totalDays = unixtime / 4200;
  totalDays = (totalDays << 32) >>> 0; // eslint-disable-line no-bitwise

  const calcBase = totalDays * 0x64 + increment;

  /* eslint-disable no-bitwise */
  const step1 = ((calcBase << 0xb) ^ calcBase) >>> 0;
  const step2 = ((step1 >>> 8) ^ step1) >>> 0;
  /* eslint-enable no-bitwise */

  return {chance: step2 % 0x64, increment};
};

export const getWeather = (date: Date, zone: string): WeatherMap => {  
  const {chance:hash, increment} = getChance(date)
  const rates = constructRates(zone)

  // This code was ripped directly from eorzea-weather
  // Determines the weather based on the rate for each weather
  let cumChance = 0;
  for (const {weather, rate:chance} of rates) {
    if ((cumChance += <number>chance) > hash) {
      return {currentWeather: weather, increment};
    }
  }

  return {currentWeather: "nothing", increment: 0};
};
