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

function RelicStep3() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "step3"}
        onChange={() => {
          handleToggle("step3");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Step 3: The Will to Resist</strong>
        </AccordionSummary>
        <AccordionDetails>
          Step three requires you to obtain 6{" "}
          <a href="https://ffxiv.consolegameswiki.com/wiki/Bitter_Memory_of_the_Dying">
            Bitter Memory of the Dying
          </a>
          <br />
          <br />
          <u>This is actually the exact same as step two so skip this if you have
          already read it.</u>
          <br />
          <br />
          There are multiple ways to obtain these but the quickest way to do
          every Bozja relic step is to actually do them in Bozja itself.
          <br />
          <br />
          The fastest way to get these memories is to join an omnifarm. These
          farms are hosted on average 1-2 times a month, usually over on CEM
          listed in our NA server list on the{" "}
          <Link href="/">main guide page.</Link>
          <br />
          Omnifarms give on average 4-5 weapons worth of memories making them
          easily the best way to obtain them in the game.
          <br />
          <br />
          If you don&apos;t want to wait for an omnifarm, it&apos;s best to form a cluster
          and/or fragment farm party in BSF or see about organzing one in a
          discord server like <a href="https://discord.gg/foexiv">FOE</a> as
          they tend to still be as fast as alternative methods like Blue Mage
          while giving you additional items like{" "}
          <a href="https://ffxiv.consolegameswiki.com/wiki/Bozjan_Cluster">
            Bozjan Clusters
          </a>{" "}
          in the process.
          <br />
          <br />
          <a href="https://docs.google.com/presentation/d/1ax8nkureepnIoTTSdcNhyIHQgCLqbcZzoe_H8kpyunU/edit">
            For more information on fragment and cluster farming please feel
            free to look at this guide
          </a>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RelicStep3;
