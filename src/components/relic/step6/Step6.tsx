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

function RelicStep6() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "step6"}
        onChange={() => {
          handleToggle("step6");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Step 6: Irresistible</strong>
        </AccordionSummary>
        <AccordionDetails>
          Step six requires you to obtain 15{" "}
          <a href="https://ffxiv.consolegameswiki.com/wiki/Raw_Emotion">
            Raw Emotions
          </a>
          <p>
            <u>
              This step should be done alongside step five if you are going for
              multiple relic weapons as DRN can complete both steps.
            </u>
          </p>
          <p>
            If you are not grinding DRN for the timeworn step, or have already
            completed timeworns you have 2 steps that I would consider
            worthwhile and once again, it relies on if you want a solo clear of
            Heaven on High.
          </p>
          <p>
            If you do not want &quot;Lone Hero&quot; and don&quot;t want to
            grind more DRN, <i>The Dalriada</i> is for you. It drops 3 Raw
            Emotions per clear and in an active instance spawns around every 30
            minutes or so.
          </p>
          <p>
            If you are new to Dal, keep in mind that Dal does scale and while
            something like a 10 person run might not seem like enough, it
            certainly is. We don&quot;t have perfect data on how Dal scales but
            it&quot;s very similar to CLL so feel free to check out the{" "}
            <a href="https://docs.google.com/spreadsheets/d/15VOR-2mV-vJUaptjEQRKQzommbh7T02K69wsb0UXq_U/edit?usp=sharing">
              CLL + Dal Scaling Data
            </a>{" "}
            and if you want more info on how to optimize your Dals check our our{" "}
            <a href="https://docs.google.com/presentation/d/1IXJalAFUasymj1nIxfF2ihi4wR7MpetGHJO41kgqZa4/edit?usp=sharing">
              Dal Strategies Slideshow
            </a>
          </p>
          <p>
            This is however, the perfect step for those who want to get the
            title &quot;Lone Hero&quot; as you can get progress towards this
            step and work towards a solo clear of Heaven on High at the same
            time.
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RelicStep6;
