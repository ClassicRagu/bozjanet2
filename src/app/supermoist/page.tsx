"use client";
import { getWindows } from "@/functions/weather/getWindows";
import { listAreas } from "@/static/weather/Areas";
import { listEurekaFarms } from "@/static/weather/Farms";
import { FarmInfo } from "@/types/weather/FarmInfo";
import { WindowTimes } from "@/types/weather/WindowTimes";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Modal,
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
    value: 1,
    label: "1",
  },
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
    setSnowState(
      getWindows(new Date(), 1, 2, "Hydatos", "Snow", 1)
    );
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
            <FormControl sx={{ m: 1 }}>
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
                      <MenuItem value={x.name} key={x.name}>
                        <div style={{ display: "flex" }}>
                          <Avatar
                            sx={{ width: 22, height: 22, marginRight: "5px" }}
                            variant="rounded"
                            src={x.weatherIcon}
                          />
                          <Typography>{x.name}</Typography>
                        </div>
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          ) : null}
        </div>
        {zoneValue != "" && farmValue != "" ? (
          <>
            {
              // This will be implemented later
              false ? (
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "10px",
                  }}
                >
                  <Accordion style={{ maxWidth: "75%" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <span style={{ verticalAlign: "middle" }}>
                        <strong>Guide</strong>
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      Step one requires you to obtain 4{" "}
                      <a href="https://ffxiv.consolegameswiki.com/wiki/Thavnairian_Scalepowder">
                        Thavnairian Scalepowder
                      </a>{" "}
                      which can be bought for a total of 1000 Allagan Tomestones
                      of Poetics in Mor Dhona.
                      <br />
                      These can be obtained from Auriana in the location shown
                      below in the &quot;Special Arms&quot; menu.
                      <br />
                      <br />
                      <Box
                        component="img"
                        sx={{
                          width: "50%",
                          height: "auto",
                        }}
                        alt="Scalepower Location"
                        src="/relic/step1/ScalepowderLocation.PNG"
                        onClick={() => {
                          setScalpowderModelState(true);
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                </div>
              ) : null
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
                  <TableContainer component={Paper} style={{ width: "80%" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Time</TableCell>
                          <TableCell>ET</TableCell>
                          {findSnowState > 1 ? (
                            <TableCell>Windows</TableCell>
                          ) : null}
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
                              {findSnowState > 1 ? (
                                <TableCell>{x.totalWindows}</TableCell>
                              ) : null}
                              <TableCell>
                                {`<t:${x.startTime.getTime() / 1000}:F>`}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
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
