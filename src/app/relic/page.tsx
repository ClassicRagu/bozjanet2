"use client";
import * as React from "react";
import { Box, Button, Card, Grid2 } from "@mui/material";
import RelicGuide from "@/components/relic/RelicGuide";
import RelicTracker from "@/components/relic/RelicTracker";

function Relic() {
  const [viewToggle, setViewToggle] = React.useState(false);

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
        <h2 style={{marginTop: "15px"}}>Bozja Relic Weapons</h2>
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
              onClick={() => setViewToggle(false)}
              variant={
                !viewToggle
                  ? "contained"
                  : "outlined"
              }
            >
              Tracker
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
              onClick={() => setViewToggle(true)}
              variant={
                viewToggle
                  ? "contained"
                  : "outlined"
              }
            >
              Guide
            </Button>
          </Grid2>
        </Grid2>
        {viewToggle ? <RelicGuide/> : <RelicTracker />}
      </Card>
    </Box>
  );
}

export default Relic;
