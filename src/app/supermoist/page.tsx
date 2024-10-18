"use client";
import EurekaFarmGuide from "@/components/supermoist/EurekaFarmGuide";
import FarmSelector from "@/components/supermoist/FarmSelector";
import FarmSliders from "@/components/supermoist/FarmSliders";
import WeatherTable from "@/components/supermoist/WeatherTable";
import { getWindows } from "@/functions/weather/getWindows";
import { FarmInfo } from "@/types/weather/FarmInfo";
import { WindowTimes } from "@/types/weather/WindowTimes";
import { Box, Card, FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";

function Weather() {
  const [longerWindowState, setLongerWindowState] = React.useState(false);
  const [weekState, setWeekState] = React.useState(1);
  const [findSnowState, setFindSnowState] = React.useState(2);
  const [snowState, setSnowState] = React.useState<WindowTimes[] | null>(null);
  const [zoneValue, setZoneValue] = React.useState("Hydatos");
  const [farmValue, setFarmValue] = React.useState("Super Moist");
  const [farmInfo, setFarmInfo] = React.useState<FarmInfo>({
    weathers: ["Snow"],
    time: 1,
  });

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
    setSnowState(getWindows(new Date(), 1, 2, "Hydatos", ["Snow"], 1));
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%",
        }}
        style={{
          textAlign: "center",
          display: "column",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ marginTop: "15px" }}>Box/Logos Windows</h2>
        <p>
          Please note this page exists solely for testing purposes and is not
          designed to look nice.
        </p>
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
            <FormGroup style={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={longerWindowState}
                    onChange={(e) => setLongerWindowState(e.target.checked)}
                  />
                }
                label="Show longer windows"
              />
            </FormGroup>
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
                  <WeatherTable snowState={snowState} longerWindowState={longerWindowState} findSnowState={findSnowState} />
                ) : null
              }
            </div>
          </>
        ) : null}
      </Card>
    </Box>
  );
}

export default Weather;
