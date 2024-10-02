"use client";
import * as React from "react";
import { Avatar, Box, Button, Card, Grid2, Modal } from "@mui/material";
import RelicGuide from "@/components/relic/RelicGuide";

function Relic() {

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
        <RelicGuide/>
      </Card>
    </Box>
  );
}

export default Relic;
