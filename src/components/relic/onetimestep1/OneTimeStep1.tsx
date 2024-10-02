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

function OneTimeStep1() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "onetimestep1"}
        onChange={() => {
          handleToggle("onetimestep1");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>One Time Grind #1: The Resistance Remembers</strong>
        </AccordionSummary>
        <AccordionDetails>
          This one time step requires you to obtain 18 of 2 types of memories:{" "}
          <ul>
            <li>
              <a href="https://ffxiv.consolegameswiki.com/wiki/Haunting_Memory_of_the_Dying">
                Haunting Memory of the Dying
              </a>
            </li>
            <li>
              <a href="https://ffxiv.consolegameswiki.com/wiki/Vexatious_Memory_of_the_Dying">
                Vexatious Memory of the Dying
              </a>
            </li>
          </ul>
          This one time step is the only step that cannot be completed at all in Bozja.
          <br />
          <br />
          Haunting memories drop 3 at a time from the level 60 Alliance Raids while Vexatious memories drop 3 at a time from the level 70 Alliance Raids.<br/><br/>
          According <a href="https://ffxiv.consolegameswiki.com/wiki/Resistance_Weapons">ConsoleGamesWiki</a>, they also drop at an estimated 61% per FATE completed in Stormblood Areas with Haunting dropping from Gyr Abania and Vexatious dropping from Othard.
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default OneTimeStep1;
