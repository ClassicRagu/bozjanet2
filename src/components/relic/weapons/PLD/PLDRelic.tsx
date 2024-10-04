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

function PLDRelic() {
  return (
    <TableRow>
      <TableCell>
        <Box
          component="img"
          sx={{
            ...basicSX,
          }}
          alt="Paladin Job Icon"
          src="/relic/weapons/PLD/paladin.png"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={0}
          job={0}
          relicImage="/relic/weapons/PLD/PLD_1_HD.png"
          altText="Paladin Step 1"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={1}
          job={0}
          relicImage="/relic/weapons/PLD/PLD_1_HD.png"
          altText="Paladin Step 2"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={2}
          job={0}
          relicImage="/relic/weapons/PLD/PLD_1_HD.png"
          altText="Paladin Step 3"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={3}
          job={0}
          relicImage="/relic/weapons/PLD/PLD_2_HD.png"
          altText="Paladin Step 4"
        />
      </TableCell>
      <TableCell>
        <IconBox
          step={4}
          job={0}
          relicImage="/relic/weapons/PLD/PLD_2_HD.png"
          altText="Paladin Step 5"
        />
      </TableCell>
      <TableCell>
      <IconBox
          step={5}
          job={0}
          relicImage="/relic/weapons/PLD/PLD_3_HD.png"
          altText="Paladin Step 6"
        />
      </TableCell>
    </TableRow>
  );
}

export default PLDRelic;
