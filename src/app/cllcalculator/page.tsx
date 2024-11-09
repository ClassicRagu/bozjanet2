"use client";
import * as React from "react";
import { Avatar, Box, Button, Card, Grid2 } from "@mui/material";

function CLL() {
  const [startTime, setStartTime] = React.useState<any>();
  const [now, setNow] = React.useState<any>();
  const [cllTime, setCLLTime] = React.useState(3660);
  const intervalRef = React.useRef<any>(null);

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // Update the current time every 1000ms.
      setNow(Date.now());
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  let minutesRemaining = 0;
  let secondsRemaining = 0;
  if (startTime != null && now != null) {
    secondsPassed = cllTime - (now - startTime) / 1000;
    minutesRemaining = Math.floor(secondsPassed / 60);
    secondsRemaining = Math.floor(secondsPassed % 60);
  }

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
        <div>
          <h2>
            <p>Time Remaining Till Next CLL</p>
            <p>
              {
                // I'm so sorry for this code, I'm being lazy
                minutesRemaining > 0 ? minutesRemaining : 0
              }
              :{secondsRemaining < 10 ? "0" : null}
              {secondsRemaining >= 0 ? secondsRemaining : 0}
            </p>
          </h2>
          <p>
              Timer started: {new Date(startTime).toLocaleTimeString()}
          </p>
        </div>
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
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "50px",
              minWidth: "250px",
            }}
          >
            <Button
              size="large"
              style={{ minWidth: "250px" }}
              onClick={() => {
                handleStart();
                setCLLTime(3600);
              }}
              variant={"contained"}
              startIcon={<Avatar variant="square" src={"CLL.png"} />}
            >
              Start/Restart
            </Button>
          </Grid2>
          <Grid2
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "50px",
              minWidth: "250px",
            }}
          >
            <Button
              size="large"
              style={{ minWidth: "250px" }}
              onClick={() => {
                setCLLTime(cllTime - 300);
              }}
              variant={"contained"}
              startIcon={<Avatar variant="square" src={"cll/Duel.png"} />}
            >
              CE/Duel
            </Button>
          </Grid2>
          <Grid2
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "50px",
              minWidth: "250px",
            }}
          >
            <Button
              size="large"
              style={{ minWidth: "250px" }}
              onClick={() => {
                setCLLTime(cllTime - 60);
              }}
              variant={"contained"}
              startIcon={<Avatar variant="square" src={"cll/Skirmish.png"} />}
            >
              Skirmish
            </Button>
          </Grid2>
          <Grid2
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "50px",
              minWidth: "250px",
            }}
          >
            <Button
              size="large"
              style={{ minWidth: "250px", backgroundColor: "darkred" }}
              onClick={() => {
                handleStop();
              }}
              variant={"contained"}
            >
              Stop
            </Button>
          </Grid2>
        </Grid2>
        <div
          style={{
            alignContent: "left",
            justifyContent: "left",
            textAlign: "left",
            marginLeft: "10px",
          }}
        >
          <h3>How to use this tool</h3>
          <p>
            Press &quot;Start/Restart&quot; the moment CLL/Dal disappears from the map.
            <br />
            Skirmishes and CEs do not count towards the CLL timer while CLL is
            running.
          </p>
          <h3>What is the math behind this?</h3>
          <p>
            CLL and Dal&apos;s timers start at 60 minutes and get reduced by each
            Skirmish and CE completed by the instance.
            <br />
            Each Skirmish successfully completed cuts the time down by 1 minute.
            <br />
            Each CE or Duel successfully completed cuts the time down by 6
            minutes.
          </p>
        </div>
      </Card>
    </Box>
  );
}

export default CLL;
