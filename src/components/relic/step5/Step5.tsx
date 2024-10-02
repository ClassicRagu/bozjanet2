"use client";
import { openRelicState } from "@/hooks/openRelicState";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Modal,
} from "@mui/material";
import { useAtom } from "jotai";
import Link from "next/link";
import * as React from "react";

function RelicStep5() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "step5"}
        onChange={() => {
          handleToggle("step5");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Step 5: A New Path of Resistance</strong>
        </AccordionSummary>
        <AccordionDetails>
          Step five requires you to obtain 15{" "}
          <a href="https://ffxiv.consolegameswiki.com/wiki/Timeworn_Artifact">
            Timeworn Artifacts
          </a>
          <br />
          <br />
          This step only has two ways to complete it and it depends on if you
          just want to finish quickly or go for the &quot;The Necromancer&quot; title.
          <br />
          <br />
          If you want to go as fast as possible, Delubrum Reginae is the way to
          go as it drops 3 Timeworn Artifacts every clear and can combo with
          step 6 for Raw Emotions if you are making multiple weapons.
          <br />
          <br />
          Parties of 24 rarely fill for DRN now so I suggest setting up a party
          with either 5 or 8 people. If you are queuing with less than 24 people
          you will be required to wait for 10 minutes before it puts you in
          instance.
          <br />
          <br />
          The speed of this step heavily relies on the actions and essences people are using in DRN. If you are with 8 people <a href="https://i.imgur.com/OmaJ15C.png">use this guide</a> and if you are with 5 people <a href="https://i.imgur.com/tjgIByv.png">use this guide.</a>
          <br />
          <br />
          This is however, the perfect step for those who want to get the title &quot;The Necromancer&quot; as you can get progress towards this step and work towards a solo clear of Palace of the Dead at the same time.
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RelicStep5;
