"use client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { defaultList } from "./weapons/defaultList";
import { atomWithStorage } from "jotai/utils";
import RelicList from "./weapons/RelicList";
import RelicRemainingItems from "./weapons/RelicRemainingItems";

export const weaponState = atomWithStorage<boolean[][]>(
  "weaponState",
  defaultList
);

function RelicTracker() {
  return (
    <>
      <div style={{ margin: "10px", textAlign: "left" }}>
        <RelicRemainingItems/>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job</TableCell>
                <TableCell>Step 1</TableCell>
                <TableCell>Step 2</TableCell>
                <TableCell>Step 3</TableCell>
                <TableCell>Step 4</TableCell>
                <TableCell>Step 5</TableCell>
                <TableCell>Step 6</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RelicList />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default RelicTracker;
