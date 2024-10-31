import { WindowTimes } from "@/types/weather/WindowTimes";
import { getETWindow, getTimefromIncrement, getWeather } from "xivweather";
import { getZone } from "./getZone";

const EIGHT_HOURS = 8 * 175 * 1000;

// validates that the current window takes place at night if needed
const checkForNightOnly = (
  time: number,
  windows: number,
  increment: number
) => {
  return (
    time != 1 ||
    windows > 2 ||
    increment == 0 ||
    (windows == 1 && increment == 8)
  );
};

export const getWindows = (
  startTime: Date,
  weeks: number,
  windows: number,
  zone: string,
  weathers: string[],
  time: number
): WindowTimes[] => {
  let timeArr: WindowTimes[] = [];
  let lastWeather = 1;
  const realStartTime = getETWindow(startTime).getTime();
  const endTime = getETWindow(
    new Date(startTime.getTime() + weeks * 6.048e8)
  ).getTime();
  let storedStart = new Date();
  let storedIncrement = -1;
  let storedWeathers = []
  let i = realStartTime;
  while (i < endTime) {
    const { currentWeather, increment } = getWeather(new Date(i), getZone(zone));
    const validWeather = weathers.includes(currentWeather);
    if (validWeather) {
      storedWeathers.push(currentWeather)
      storedStart = new Date(i);
      storedIncrement = increment;
      i = i + EIGHT_HOURS;
      while (true) {
        const newWeather = getWeather(new Date(i), getZone(zone)).currentWeather
        if (weathers.includes(newWeather)) {
          storedWeathers.push(newWeather)
          i = i + EIGHT_HOURS;
          lastWeather++;
        } else {
          break;
        }
      }
      if (windows < lastWeather) {
        timeArr = [
          ...timeArr,
          {
            startTime: storedStart,
            totalWindows: lastWeather,
            startTimeET: getTimefromIncrement(storedIncrement),
            endTime: new Date(i),
            weathers: storedWeathers
          },
        ];
        lastWeather = 1;
      } else if (
        windows == lastWeather &&
        checkForNightOnly(time, windows, storedIncrement)
      ) {
        timeArr = [
          ...timeArr,
          {
            startTime: storedStart,
            totalWindows: lastWeather,
            startTimeET: getTimefromIncrement(storedIncrement),
            endTime: new Date(i),
            weathers: storedWeathers
          },
        ];
        lastWeather = 1;
      }
    } else {
      storedWeathers = [];
      lastWeather = 1;
      i = i + EIGHT_HOURS;
    }
  }
  return timeArr;
};
