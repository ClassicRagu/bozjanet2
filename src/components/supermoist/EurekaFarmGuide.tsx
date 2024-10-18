"use client";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Box, Modal
} from "@mui/material";
import React from "react";

function EurekaFarmGuide() {
  const [scalpowderModelState, setScalpowderModelState] = React.useState(false);

  return (
    <>
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
            which can be bought for a total of 1000 Allagan Tomestones of
            Poetics in Mor Dhona.
            <br />
            These can be obtained from Auriana in the location shown below in
            the &quot;Special Arms&quot; menu.
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
    </>
  );
}

export default EurekaFarmGuide;
