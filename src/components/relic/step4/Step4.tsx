"use client";
import { openRelicState } from "@/hooks/openRelicState";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box
} from "@mui/material";
import { useAtom } from "jotai";

function RelicStep4() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "step4"}
        onChange={() => {
          handleToggle("step4");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div>
            <Box
              component="img"
              sx={{
                maxWidth: "30px",
                height: "auto",
                width: "auto",
                verticalAlign: "middle",
                marginRight: "5px",
              }}
              alt="LoathsomeMemory"
              src="/relic/step4/LoathsomeMemory.png"
            />
            <span style={{ verticalAlign: "middle" }}>
              <strong>Step 4: Change of Arms</strong>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Step four requires you to obtain 15{" "}
          <a href="https://ffxiv.consolegameswiki.com/wiki/Loathsome_Memory_of_the_Dying">
            Loathsome Memory of the Dying
          </a>
          <p>
            There is really only one way to get these in any reasonable amount
            of time and that is to do Castrum Lacus Litore as each clear will
            give you 5 memories.
          </p>
          <p>
            Alongside doing CLL, make sure to do any Critical Engagements that
            may appear in BSF and those also have a chance of dropping 1 memory.
          </p>
          <p>
            If you are on NA, the discord server{" "}
            <a href="https://discord.gg/foexiv">FOE</a> support CLL pings which
            may make it easier to find more people to join CLL if it pops in
            your instance.
          </p>
          <p>
            If you are new to CLL, keep in mind that CLL does scale and while
            something like a 10 person run might not seem like enough, it
            certainly is. If you are curious on how CLL scales feel free to look
            at the{" "}
            <a href="https://docs.google.com/spreadsheets/d/15VOR-2mV-vJUaptjEQRKQzommbh7T02K69wsb0UXq_U/edit?usp=sharing">
              CLL Scaling Data
            </a>{" "}
            and if you want more info on how to optimize your CLLs check our our{" "}
            <a href="https://docs.google.com/presentation/d/1IXJalAFUasymj1nIxfF2ihi4wR7MpetGHJO41kgqZa4/edit?usp=sharing">
              CLL Strategies Slideshow
            </a>
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RelicStep4;
