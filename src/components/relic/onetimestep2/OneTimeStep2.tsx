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

function OneTimeStep2() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "onetimestep2"}
        onChange={() => {
          handleToggle("onetimestep2");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>One Time Grind #2: What Dreams Are Made Of</strong>
        </AccordionSummary>
        <AccordionDetails>
          This one time step requires you to complete 3 quests each requiring
          items obtained from Skirmishes and CEs:{" "}
          <ul>
            <li>
              <a href="https://ffxiv.consolegameswiki.com/wiki/Spare_Parts">
                Spare Parts
              </a>
            </li>
            <li>
              <a href="https://ffxiv.consolegameswiki.com/wiki/Tell_Me_a_Story">
                Tell Me a Story
              </a>
            </li>
            <li>
              <a href="https://ffxiv.consolegameswiki.com/wiki/A_Fond_Memory">
                A Fond Memory
              </a>
            </li>
          </ul>
          Each of these quests requires 30 of 2 items. Each item correlates to
          Skirmishes and Critical Engagements in each zone of Zadnor. This is
          simply completed by doing those Skirmishes and Critical Engagements.
          <br />
          <br />
          As a note, the alternatives for this step are almost never worth
          doing, even the CE ones as they require specific raids to be completed
          synced. If you are having issues with the CE items in particular I
          suggest spawning them yourself, just follow the cluster farming
          section{" "}
          <a href="https://docs.google.com/presentation/d/1ax8nkureepnIoTTSdcNhyIHQgCLqbcZzoe_H8kpyunU/edit?usp=sharing">
            in this guide
          </a>{" "}
          and kill 4th legion magitek in each zone to spawn CES. You can keep
          track of what CEs have spawned so far{" "}
          <a href="https://syldrathecat.github.io/xivcat/bozja-tracker/#zadnor">
            on this site.
          </a>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default OneTimeStep2;
