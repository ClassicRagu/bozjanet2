import { SnowTimes } from "@/types/weather/SnowTimes";
import { getChance } from "./getChance";
import { getStartTime } from "./getStartTime";
import { getWeather } from "./getWeather";
import { getIncrement } from "./getIncrement";

const EIGHT_HOURS = 8 * 175 * 1000;

const translateStartTime = (startingIncrement: number) => {
  return startingIncrement == 0 ? "4pm" : startingIncrement == 8 ? "12am" : "8am"
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
    i < endTime; //realStartTime + ONE_DAY * 1000;
    i = i + EIGHT_HOURS
  ) {
    const increment = getIncrement(new Date(i));
    if(snows == 1){
      if(getWeather(getChance(new Date(i)), zone) == weather && (time != 1 || increment < 16)) {
        const startingIncrement = getIncrement(new Date(i))
        timeArr = [
          ...timeArr,
          { startTime: new Date(i), startTimeET: translateStartTime(startingIncrement) , endTime: new Date(i) },
        ]
      }
    } else if (time == 1 && snows == 2) {
      if (increment < 16 && getWeather(getChance(new Date(i)), zone) == weather) {
        if (lastSnow > 0 && increment == 8) {
          timeArr = [
            ...timeArr,
            { startTime: new Date(i - EIGHT_HOURS), startTimeET: "4pm" , endTime: new Date(i) },
          ];
        }
        lastSnow = 1;
      } else {
        lastSnow = 0;
      }
    } else {
      const snowWeather = getWeather(getChance(new Date(i)), zone) == weather
      if(snowWeather && lastSnow == 0){
        storedStart = new Date(i)
        lastSnow = 1;
      } else if (snowWeather && lastSnow == (snows - 1)){
        const startingIncrement = getIncrement(storedStart)
        timeArr = [
          ...timeArr,
          { startTime: storedStart, startTimeET: translateStartTime(startingIncrement) ,endTime: new Date(i) },
        ];
        lastSnow = 0
      } else if (snowWeather) {
        lastSnow += 1;
      } else {
        lastSnow = 0;
      }
    }
  }
  return timeArr;
};
