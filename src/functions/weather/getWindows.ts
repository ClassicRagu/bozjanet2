import { WindowTimes } from "@/types/weather/WindowTimes";
import {
  findWeatherWindows
} from "xivweather";
import { getZone } from "./getZone";

export const getWindows = (
  startTime: Date,
  weeks: number,
  windows: number,
  zone: string,
  weathers: string[],
  time: number
): WindowTimes[] => {
  const endTime = new Date(startTime.getTime() + weeks * 6.048e8);
  const zoneObj = getZone(zone);

  return findWeatherWindows(
    startTime,
    endTime,
    windows,
    zoneObj,
    weathers,
    time === 1
  );
};
