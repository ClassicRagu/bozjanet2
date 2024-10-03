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
          <p>
            <u>
              This is step almost idenical to step 2. I&apos;ve underlined some
              key differences for those who have already read that step.
            </u>
          </p>
          <p>
            There are multiple ways to obtain these but the quickest way to do
            every Bozja relic step is to actually do them in Bozja itself.
          </p>
          <p>
            The fastest way to get these memories is to join an omnifarm. These
            farms are hosted on average 1-2 times a month, usually over on CEM
            listed in our NA server list on the{" "}
            <Link href="/">main guide page.</Link>{" "}
            <u>
              As an important note, a single omnifarm will likely get you enough
              memories for every single relic weapon.
            </u>
          </p>
          <p>
            If you don&apos;t want to wait for an omnifarm, it&apos;s best to
            form a cluster and/or fragment farm party in BSF or see about
            organzing one in a discord server like{" "}
            <a href="https://discord.gg/foexiv">FOE</a> as they tend to still be
            as fast as alternative methods like Blue Mage while giving you
            additional items like{" "}
            <a href="https://ffxiv.consolegameswiki.com/wiki/Bozjan_Cluster">
              Bozjan Clusters
            </a>{" "}
            in the process.
          </p>
          <a href="https://docs.google.com/presentation/d/1ax8nkureepnIoTTSdcNhyIHQgCLqbcZzoe_H8kpyunU/edit">
            For more information on fragment and cluster farming please feel
            free to look at this guide
          </a>
          <p>
            <u>
              Though I heavily suggest omnifarms for this step, it can also be
              done relatively passively if you are leveling as you get 1 for
              doing Leveling Roulette daily.
            </u>
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RelicStep3;
