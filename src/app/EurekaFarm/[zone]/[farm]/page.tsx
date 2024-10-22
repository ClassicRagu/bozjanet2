"use client";
import EurekaFarmGuide from "@/components/supermoist/EurekaFarmGuide";
import FarmSelector from "@/components/supermoist/FarmSelector";
import FarmSliders from "@/components/supermoist/FarmSliders";
import AdditionalSettings from "@/components/supermoist/AdditionalSettings";
import WeatherTable from "@/components/supermoist/WeatherTable";
import { getWindows } from "@/functions/weather/getWindows";
import { FarmInfo } from "@/types/weather/FarmInfo";
import { WindowTimes } from "@/types/weather/WindowTimes";
import React from "react";
import { listEurekaFarms } from "@/static/weather/Farms";

function Weather({ params }: { params: { zone: string; farm: string } }) {
  const [longerWindowState, setLongerWindowState] = React.useState(true);
  const [discordTimestampAdjust, setDiscordTimestampAdjust] =
    React.useState("0");
  const [weekState, setWeekState] = React.useState(1);
  const [findSnowState, setFindSnowState] = React.useState(2);
  const [snowState, setSnowState] = React.useState<WindowTimes[] | null>(null);
  const [zoneValue, setZoneValue] = React.useState(params.zone);
  const [farmValue, setFarmValue] = React.useState(
    params.farm.replaceAll("%20", " ")
  );
  const [farmInfo, setFarmInfo] = React.useState<FarmInfo>(
    listEurekaFarms
      .find((x) => x.name == params.zone)
      ?.farms.find((x) => x.name == params.farm.replaceAll("%20", " "))?.info ?? {
      weathers: [""],
      time: -1,
    }
  );

  React.useEffect(() => {
    setSnowState(
      getWindows(
        new Date(),
        weekState,
        findSnowState,
        zoneValue,
        farmInfo.weathers,
        farmInfo.time
      )
    );
  }, [weekState, findSnowState, zoneValue, farmInfo]);

  React.useEffect(() => {
    const farm = params.farm.replaceAll("%20", " ");
    const farmVals = listEurekaFarms
      .find((x) => x.name == params.zone)
      ?.farms.find((x) => x.name == farm)?.info ?? {
      weathers: [""],
      time: -1,
    };

    setSnowState(
      getWindows(
        new Date(),
        1,
        2,
        params.zone,
        farmVals.weathers,
        farmVals.time
      )
    );
  }, [params.farm, params.zone]);

  return (
    <>
      <FarmSelector
        setZoneValue={setZoneValue}
        zoneValue={zoneValue}
        setFarmValue={setFarmValue}
        farmValue={farmValue}
        setFarmInfo={setFarmInfo}
      />
      {zoneValue != "" && farmValue != "" ? (
        <>
          {
            // This will be implemented later
            false ? <EurekaFarmGuide /> : null
          }
          <FarmSliders
            setWeekState={setWeekState}
            weekState={weekState}
            setFindSnowState={setFindSnowState}
            findSnowState={findSnowState}
          />
          <AdditionalSettings
            setLongerWindowState={setLongerWindowState}
            longerWindowState={longerWindowState}
            discordTimestampAdjust={discordTimestampAdjust}
            setDiscordTimestampAdjust={setDiscordTimestampAdjust}
          />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginBottom: "10px",
            }}
          >
            {
              // Ensure we have a snowState
              snowState != null ? (
                <WeatherTable
                  snowState={snowState}
                  longerWindowState={longerWindowState}
                  findSnowState={findSnowState}
                  discordTimestampAdjust={discordTimestampAdjust}
                />
              ) : null
            }
          </div>
        </>
      ) : null}
    </>
  );
}

export default Weather;
