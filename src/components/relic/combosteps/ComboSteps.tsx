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

function ComboSteps() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "combosteps"}
        onChange={() => {
          handleToggle("combosteps");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Combining Steps</strong>
        </AccordionSummary>
        <AccordionDetails>
          Many steps in the Bozja relic grind can be done at the same time so it
          tends to be worthwhile to get a weapon at every step to have all steps
          active at once. The following steps can be done simultaneously:
          <ul>
            <li>
              Steps 2 and 3: Omnifarms and general cluster/fragment farming in
              BSF
            </li>
            <li>Steps 5 and 6: DRN</li>
          </ul>
          This is also an amazing way to grind Allagan Tomestones of Poetics so
          consider working on{" "}
          <a href="https://ffxiv.consolegameswiki.com/wiki/Zodiac_Weapons">
            Zodiac
          </a>{" "}
          and{" "}
          <a href="https://ffxiv.consolegameswiki.com/wiki/Anima_Weapons">
            Anima
          </a>{" "}
          relics if you are interested in those.
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ComboSteps;
