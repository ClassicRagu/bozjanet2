"use client"
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid2 } from "@mui/material";
import { openKeyState } from "@/hooks/openKeyState";
import { useAtom } from "jotai";

export type BozjaAccordianProps = {
  Name: string
  Guides: string[][]
  Additional: string[]
}

function BozjaAccordians(props: BozjaAccordianProps) {
  const [openKey, setOpenKey] = useAtom(openKeyState);

  const handleToggle = (key: string) => {
    setOpenKey(openKey !== key ? key : null);
  };

  const card = (guideName: string, internalGuides: string[][], additionalGuides: string[]) => {
    const guideList: React.JSX.Element[] = [];

    internalGuides.forEach((element: string[], index) => {
      guideList.push(
        <p key={`${guideName}-${index}`} id={`${guideName}-${index}`}>
          <a href={element[1]}>{element[0]}</a>
        </p>
      );
    });

    if (additionalGuides) {
      additionalGuides.forEach((element: string, index) => {
        guideList.push(<p id={`additional-${guideName}-${index}`} key={`additional-${guideName}-${index}`} dangerouslySetInnerHTML={{ __html: element}} />);
      });
    }

    return (
      <Accordion
        expanded={openKey === guideName}
        onChange={() => {
          handleToggle(guideName);
        }}
        sx={{minWidth: "250px"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={guideName}
          id={guideName}
        >
          <Typography>{guideName}</Typography>
        </AccordionSummary>
        <AccordionDetails>{guideList}</AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Grid2 size={{xs: 12, sm: 6, md: 4}} key={props.Name}>
        {card(props.Name, props.Guides, props.Additional)}
    </Grid2>
  );
}

export default BozjaAccordians;
