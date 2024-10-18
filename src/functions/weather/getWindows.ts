import { WindowTimes } from "@/types/weather/WindowTimes";
import { getStartTime } from "./getStartTime";
import { getWeather } from "./getWeather";

const EIGHT_HOURS = 8 * 175 * 1000;

// Translates increment to ET start time
const translateStartTime = (startingIncrement: number) => {
  return startingIncrement == 0
    ? "4pm"
    : startingIncrement == 8
    ? "12am"
    : "8am";
};

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
  weather: string,
  time: number
): WindowTimes[] => {
  let timeArr: WindowTimes[] = [];
  let lastWeather = 1;
  const realStartTime = getStartTime(startTime).getTime();
  const endTime = getStartTime(
    new Date(startTime.getTime() + weeks * 6.048e8)
  ).getTime();
  let storedStart = new Date();
  let storedIncrement = -1;
  let i = realStartTime;
  while (i < endTime) {
    const { currentWeather, increment } = getWeather(new Date(i), zone);
    const validWeather = currentWeather == weather;
    if (validWeather) {
      storedStart = new Date(i);
      storedIncrement = increment;
      i = i + EIGHT_HOURS;
      while (true) {
        if (getWeather(new Date(i), zone).currentWeather == weather) {
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
            startTimeET: translateStartTime(storedIncrement),
            endTime: new Date(i),
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
            startTimeET: translateStartTime(storedIncrement),
            endTime: new Date(i),
          },
        ];
        lastWeather = 1;
      }
    } else {
      lastWeather = 1;
      i = i + EIGHT_HOURS;
    }
  }
  return timeArr;
};
