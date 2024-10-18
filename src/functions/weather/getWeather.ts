import { hydatosWeather } from "@/static/weather/Weather/HydatosXIVAPI";
import { pagosWeather } from "@/static/weather/Weather/PagosXIVAPI";
import { pyrosWeather } from "@/static/weather/Weather/PyrosXIVAPI";

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
const constructRates = (zone: string) => {
  const zoneFields = getZone(zone)
  const rateMap = zoneFields.fields.Rate.map((x, index) =>{
    return [zoneFields.fields.Weather[index].fields.Name, x]
  })
  return rateMap
}

export const getWeather = (hash: number, zone: string) => {  
  const rates = constructRates(zone)

  // This code was ripped directly from eorzea-weather
  // Determines the weather based on the rate for each weather
  let cumChance = 0;
  for (const [weather, chance] of rates) {
    if ((cumChance += <number>chance) > hash) {
      return weather;
    }
  }
  return "nothing";
};
