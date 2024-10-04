"use client";
import { Box, TableCell, TableRow } from "@mui/material";
import IconBox from "../IconBox";

const basicSX = {
  height: "auto",
  maxWidth: "50px",
  width: "auto",
  verticalAlign: "middle",
  marginRight: "5px",
};

function DRKRelic() {
  return (
    <TableRow>
      <TableCell>
        <Box
          component="img"
          sx={{
            ...basicSX,
          }}
          alt="Dark Knight Job Icon"
          src="/relic/weapons/DRK/darkknight.png"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={0}
          job={2}
          relicImage="/relic/weapons/DRK/DRK_1_HD.png"
          altText="Dark Knight Step 1"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={1}
          job={2}
          relicImage="/relic/weapons/DRK/DRK_1_HD.png"
          altText="Dark Knight Step 2"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={2}
          job={2}
          relicImage="/relic/weapons/DRK/DRK_1_HD.png"
          altText="Dark Knight Step 3"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={3}
          job={2}
          relicImage="/relic/weapons/DRK/DRK_2_HD.png"
          altText="Dark Knight Step 4"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={4}
          job={2}
          relicImage="/relic/weapons/DRK/DRK_2_HD.png"
          altText="Dark Knight Step 5"
        />
      </TableCell>
      <TableCell>
      <IconBox
          step={5}
          job={2}
          relicImage="/relic/weapons/DRK/DRK_3_HD.png"
          altText="Dark Knight Step 6"
        />
      </TableCell>
    </TableRow>
  );
}

export default DRKRelic;
