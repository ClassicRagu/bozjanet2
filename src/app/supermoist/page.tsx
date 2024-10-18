"use client";
import EurekaFarmGuide from "@/components/supermoist/EurekaFarmGuide";
import FarmSelector from "@/components/supermoist/FarmSelector";
import WeatherTable from "@/components/supermoist/WeatherTable";
import { getWindows } from "@/functions/weather/getWindows";
import { marks, snow } from "@/static/weather/SliderMarks";
import { FarmInfo } from "@/types/weather/FarmInfo";
import { WindowTimes } from "@/types/weather/WindowTimes";
import {
  Box,
  Card, Grid2, Modal, Slider,
  Typography
} from "@mui/material";
import React from "react";

function Weather() {
  const [weekState, setWeekState] = React.useState(1);
  const [findSnowState, setFindSnowState] = React.useState(2);
  const [snowState, setSnowState] = React.useState<WindowTimes[] | null>(null);
  const [zoneValue, setZoneValue] = React.useState("Hydatos");
  const [farmValue, setFarmValue] = React.useState("Super Moist");
  const [farmInfo, setFarmInfo] = React.useState<FarmInfo>({
    weather: "Snow",
    time: 1,
  });
  const [scalpowderModelState, setScalpowderModelState] = React.useState(false);

  React.useEffect(() => {
    setSnowState(
      getWindows(
        new Date(),
        weekState,
        findSnowState,
        zoneValue,
        farmInfo.weather,
        farmInfo.time
      )
    );
  }, [weekState, findSnowState, zoneValue, farmInfo]);

  React.useEffect(() => {
    setSnowState(getWindows(new Date(), 1, 2, "Hydatos", "Snow", 1));
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
            <Modal
              open={scalpowderModelState}
              onClose={() => setScalpowderModelState(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                component="img"
                sx={{
                  position: "absolute" as "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "auto",
                  maxWidth: 900,
                }}
                src="/relic/step1/ScalepowderLocation.PNG"
              />
            </Modal>
            <Grid2
              container
              spacing={2}
              style={{
                minHeight: "75px",
                maxWidth: "1000px",
                marginBottom: "10px",
                alignItems: "top",
                justifyContent: "center",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <Grid2
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  maxHeight: "50px",
                  minWidth: "250px",
                }}
              >
                <Typography gutterBottom>Weeks</Typography>
                <Slider
                  style={{ width: "90%", maxWidth: "600px" }}
                  aria-label="Weeks"
                  value={weekState}
                  onChange={(e, newValue) => {
                    if (typeof newValue == "number") setWeekState(newValue);
                  }}
                  max={8}
                  min={1}
                  step={null}
                  valueLabelDisplay="off"
                  marks={marks}
                />
              </Grid2>
              <Grid2
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  maxHeight: "50px",
                  minWidth: "250px",
                }}
              >
                <Typography gutterBottom>Windows</Typography>
                <Slider
                  style={{ width: "90%", maxWidth: "600px" }}
                  aria-label="Weeks"
                  value={findSnowState}
                  onChange={(e, newValue) => {
                    if (typeof newValue == "number") setFindSnowState(newValue);
                  }}
                  max={5}
                  min={1}
                  step={1}
                  valueLabelDisplay="off"
                  marks={snow}
                />
              </Grid2>
            </Grid2>
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
                    findSnowState={findSnowState}
                    snowState={snowState}
                  />
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
