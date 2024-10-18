import { SnowTimes } from "@/types/weather/SnowTimes";
import { getChance } from "./getChance";
import { getStartTime } from "./getStartTime";
import { getWeather } from "./getWeather";
import { getIncrement } from "./getIncrement";

const EIGHT_HOURS = 8 * 175 * 1000;

// Translates increment to ET start time
const translateStartTime = (startingIncrement: number) => {
  return startingIncrement == 0 ? "4pm" : startingIncrement == 8 ? "12am" : "8am"
}

// validates that the current window takes place at night if needed
const checkForNightOnly = (time: number, snows:number, increment: number) => {
  return time != 1 || snows > 2 || increment == 0
}

export const findSuperMoistWindows = (
  startTime: Date,
  weeks: number,
  snows: number,
  zone: string,
  weather: string,
  time: number,
  
): SnowTimes[] => {
  let timeArr: SnowTimes[] = [];
  let lastSnow = 0;
  const realStartTime = getStartTime(startTime).getTime();
  const endTime = getStartTime(
    new Date(startTime.getTime() + weeks * 6.048e8)
  ).getTime();
  let storedStart = new Date();
  for (
    let i = realStartTime;
    i < endTime;
    i = i + EIGHT_HOURS
  ) {
    const increment = getIncrement(new Date(i));
    const currentWeather = getWeather(getChance(new Date(i)), zone)
    if(snows == 1){
      if(getWeather(getChance(new Date(i)), zone) == weather && (time != 1 || increment < 16)) {
        timeArr = [
          ...timeArr,
          { startTime: new Date(i), totalSnows: 1, startTimeET: translateStartTime(increment) , endTime: new Date(i) },
        ]
      }
    } else {
      const snowWeather = currentWeather == weather
      if(snowWeather && lastSnow == 0 && checkForNightOnly(time, snows, increment)){
        storedStart = new Date(i)
        lastSnow = 1;
      } else if (snowWeather && lastSnow == (snows - 1)){
        const startingIncrement = getIncrement(storedStart)
        let loopCount = 1
        // Next commit will rewrite this entire for loop to be a while loop instead so this loop will change
        while(loopCount > 0){
          if(getWeather(getChance(new Date(i + (EIGHT_HOURS * loopCount))), zone) == weather){
            lastSnow++
            loopCount++
          } else {
            loopCount = -1;
          }
        }

        timeArr = [
          ...timeArr,
          { startTime: storedStart, totalSnows: lastSnow + 1, startTimeET: translateStartTime(startingIncrement), endTime: new Date(i) },
        ];
        lastSnow = 0
      } else if (snowWeather && checkForNightOnly(time, snows, increment)) {
        lastSnow += 1;
      } else {
        lastSnow = 0;
      }
    }
  }
  return timeArr;
};
