"use client";
import * as React from "react";
import { Avatar, Box, Button, Card, Grid2, Modal } from "@mui/material";

function CLL() {
  const [startTime, setStartTime] = React.useState<any>();
  const [now, setNow] = React.useState<any>();
  const [cllTime, setCLLTime] = React.useState(3600);

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      // Update the current time every 1000ms.
      setNow(Date.now());
    }, 1000);
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
              {// I'm so sorry for this code, I'm being lazy
              minutesRemaining > 0 ? minutesRemaining : 0}:
              {secondsRemaining < 10 ? "0" : null}
              {secondsRemaining >= 0 ? secondsRemaining : 0}
            </p>
          </h2>
          <h2></h2>
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
                setCLLTime(cllTime - 360);
              }}
              variant={"contained"}
              startIcon={<Avatar variant="square" src={"cll/Duel.png"} />}
            >
              CE
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
        </Grid2>
      </Card>
    </Box>
  );
}

export default CLL;
