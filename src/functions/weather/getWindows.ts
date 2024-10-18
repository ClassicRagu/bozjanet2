import { WindowTimes } from "@/types/weather/WindowTimes";
import { getStartTime } from "./getStartTime";
import { getWeather } from "./getWeather";

const EIGHT_HOURS = 8 * 175 * 1000;

// Translates increment to ET start time
const translateStartTime = (startingIncrement: number) => {
  return startingIncrement == 0 ? "4pm" : startingIncrement == 8 ? "12am" : "8am"
}

// validates that the current window takes place at night if needed
const checkForNightOnly = (time: number, windows:number, increment: number) => {
  return time != 1 || windows > 2 || increment == 0
}

export const getWindows = (
  startTime: Date,
  weeks: number,
  windows: number,
  zone: string,
  weather: string,
  time: number,
  
): WindowTimes[] => {
  let timeArr: WindowTimes[] = [];
  let lastSnow = 0;
  const realStartTime = getStartTime(startTime).getTime();
  const endTime = getStartTime(
    new Date(startTime.getTime() + weeks * 6.048e8)
  ).getTime();
  let storedStart = new Date();
  let storedIncrement = -1;
  let i = realStartTime
  while (
    i < endTime
  ) {
    const {currentWeather, increment} = getWeather(new Date(i), zone)
    const snowWeather = currentWeather == weather
    if(windows == 1){
      if(snowWeather && (time != 1 || increment < 16)) {
        timeArr = [
          ...timeArr,
          { startTime: new Date(i), totalWindows: 1, startTimeET: translateStartTime(increment) , endTime: new Date(i) },
        ]
      }
    } else {
      if(snowWeather && lastSnow == 0 && checkForNightOnly(time, windows, increment)){
        storedStart = new Date(i)
        storedIncrement = increment
        lastSnow = 1;
      } else if (snowWeather && lastSnow == (windows - 1)){
        i = i + EIGHT_HOURS
        while(true){
          if(getWeather(new Date(i), zone).currentWeather == weather){
            i = i + EIGHT_HOURS
            lastSnow++
          } else {
            break;
          }
        }

        timeArr = [
          ...timeArr,
          { startTime: storedStart, totalWindows: lastSnow + 1, startTimeET: translateStartTime(storedIncrement), endTime: new Date(i) },
        ];
        lastSnow = 0
        continue;
      } else if (snowWeather && checkForNightOnly(time, windows, increment)) {
        lastSnow += 1;
      } else {
        lastSnow = 0;
      }
    }
    i = i + EIGHT_HOURS
  }
  return timeArr;
};
