import BozjaAccordians from "@/components/shared/BozjaAccordians";
import { Box, Grid2 } from "@mui/material";
import * as React from "react";

const faqs = require("./json/FAQ.json");

type FAQ = {
  Name: string;
  Info: string[];
  Links: string[][];
};

function FAQ() {
  const formattedFAQs: React.JSX.Element[] = [];

  faqs.forEach((element: FAQ) => {
    const formattedLinks: string[] = [];
    element.Info.forEach((info: string, index) => {
      formattedLinks.push(
        info.replace(
          "<LINK>",
          `<a href=${element.Links[index][1]}>${element.Links[index][0]}</a>`
        )
      );
    });
    formattedFAQs.push(
      <BozjaAccordians
        Name={element.Name}
        Guides={[]}
        Additional={formattedLinks}
        key={`FAQ-${element.Name}`}
      />
    );
  });

  return (
    <Box
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        spacing={1}
        sx={{ alignItems: "top", justifyContent: "center", width: "75%" }}
        style={{ minHeight: "200px" }}
      >
        {formattedFAQs}
      </Grid2>
    </Box>
  );
}

export default FAQ;
