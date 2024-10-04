"use client";
import * as React from "react";
import { Box, Card } from "@mui/material";
import RelicGuide from "@/components/relic/RelicGuide";
import RelicTracker from "@/components/relic/RelicTracker";

function Relic() {
  const [viewToggle] = React.useState(false);

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
        <h2>Bozja Relic Weapons</h2>
        {!viewToggle ? <RelicGuide/> : <RelicTracker />}
      </Card>
    </Box>
  );
}

export default Relic;
