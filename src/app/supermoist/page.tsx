"use client";
import { findSuperMoistWindows } from "@/functions/weather/findSuperMoistWindows";
import { getChance } from "@/functions/weather/getChance";
import { getWeather } from "@/functions/weather/getWeather";
import { listAreas } from "@/static/weather/Areas";
import { listEurekaFarms } from "@/static/weather/Farms";
import { FarmInfo } from "@/types/weather/FarmInfo";
import {
  Box,
  Card,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

//const ONE_DAY = EIGHT_HOURS * 3;

const marks = [
  {
    value: 1,
    label: "1w",
  },
  {
    value: 2,
    label: "2w",
  },
  {
    value: 4,
    label: "4w",
  },
  {
    value: 8,
    label: "8w",
  },
];

const snow = [
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

function Weather() {
  const [weekState, setWeekState] = React.useState(1);
  const [findSnowState, setFindSnowState] = React.useState(2);
  const [snowState, setSnowState] = React.useState(() => {
    return findSuperMoistWindows(
      new Date(),
      weekState,
      findSnowState,
      "Hydatos",
      "Snow",
      1
    );
  });
  const [zoneValue, setZoneValue] = React.useState("Hydatos");
  const [farmValue, setFarmValue] = React.useState("Super Moist");
  const [farmInfo, setFarmInfo] = React.useState<FarmInfo>({
    weather: "Snow",
    time: 1,
  });

  React.useEffect(() => {
    setSnowState(
      findSuperMoistWindows(
        new Date(),
        weekState,
        findSnowState,
        zoneValue,
        farmInfo.weather,
        farmInfo.time
      )
    );
  }, [weekState, findSnowState, zoneValue, farmInfo]);

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
        <div style={{ display: "inline" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Zone</InputLabel>
            <Select
              onChange={(event) => {
                if (event.target.value !== undefined) {
                  setZoneValue(event.target.value);
                  setFarmValue("");
                } else {
                  setZoneValue("");
                  setFarmValue("");
                }
              }}
              value={zoneValue}
              id="combo-box-demo"
              label={"Zone"}
              style={{
                minWidth: "350px",
                float: "left",
              }}
            >
              {listAreas.map((x) => {
                return (
                  <MenuItem key={x} value={x}>
                    {x}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {zoneValue != "" ? (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Farm</InputLabel>
              <Select
                onChange={(event) => {
                  if (event.target.value !== undefined) {
                    setFarmValue(event.target.value);
                    setFarmInfo(
                      listEurekaFarms
                        .find((x) => x.name == zoneValue)
                        ?.farms.find((x) => x.name == event.target.value)
                        ?.info ?? { weather: "", time: -1 }
                    );
                  } else {
                    setFarmValue("");
                  }
                }}
                value={farmValue}
                id="combo-box-demo"
                label={"Farm"}
                style={{
                  minWidth: "350px",
                  float: "left",
                }}
              >
                {listEurekaFarms
                  .find((x) => x.name == zoneValue)
                  ?.farms.map((x) => {
                    return (
                      <MenuItem key={x.name} value={x.name}>
                        {x.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          ) : null}
        </div>
        {zoneValue != "" && farmValue != "" ? (
          <>
            <Grid2
              container
              spacing={2}
              style={{
                minHeight: "75px",
                maxWidth: "1000px",
                marginBottom: "5px",
                alignItems: "top",
                justifyContent: "center",
                width: "100%",
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
                  min={2}
                  step={1}
                  valueLabelDisplay="off"
                  marks={snow}
                />
              </Grid2>
            </Grid2>
            <p>
              Current Hydatos Weather:{" "}
              {getWeather(getChance(new Date()), zoneValue)}
            </p>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "10px",
              }}
            >
              <TableContainer component={Paper} style={{ width: "80%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Time</TableCell>
                      <TableCell>ET</TableCell>
                      <TableCell>Timestamp</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {snowState.map((x, index) => {
                      return (
                        <TableRow key={`supermoist-${index}`}>
                          <TableCell key={`${index}`}>
                            {x.startTime.toLocaleString()}
                          </TableCell>
                          <TableCell>{x.startTimeET}</TableCell>
                          <TableCell>
                            {`<t:${x.startTime.getTime() / 1000}:F>`}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        ) : null}
      </Card>
    </Box>
  );
}

export default Weather;
