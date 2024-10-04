"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import { defaultList } from "./weapons/defaultList";
import { atomWithStorage } from "jotai/utils";
import RelicList from "./weapons/RelicList";

export const weaponState = atomWithStorage<boolean[][]>(
  "weaponState",
  defaultList
);

function RelicTracker() {
  return (
    <>
      <div style={{ margin: "10px", textAlign: "left" }}>
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
      </div>
    </>
  );
}

export default RelicTracker;
