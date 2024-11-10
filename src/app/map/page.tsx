"use client";
import * as React from "react";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel, TextField
} from "@mui/material";
import "leaflet/dist/leaflet.css";

import {
  listActions,
  actions,
  fragments,
  fragmentList,
} from "@/static/map/Actions";
import { useAtom } from "jotai";
import { fragmentState } from "@/hooks/map/fragmentState";
import dynamic from "next/dynamic";
import { magitekState } from "@/hooks/map/magitekState";

const FragmentMap = dynamic(
  () => import("@/components/map/FragmentMap"),
  {
    ssr: false,
  }
);

// This map pages will need to be moved to TS eventually. I'm leaving them
// on JS for the initial release as there are a far more changes to be
// made than the other files

function FragmentLookup() {
  const [inputValue, setInputValue] = React.useState("");
  const [fragment, setFragment] = useAtom(fragmentState);
  const [magitek, setMagitek] = useAtom(magitekState);
  const [fragmentInputValue, setFragmentInputValue] = React.useState("");

  return (
    <>
      {
        <div
          style={{
            display: "inline",
          }}
        >
          <Autocomplete
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              if (newInputValue !== undefined) {
                setInputValue(newInputValue);
              } else {
                setInputValue("");
              }
            }}
            value={inputValue}
            onChange={(event, newValue) => {
              const val = actions.filter((x) => x.ActionName === newValue)[0];
              if (val) {
                setFragment(val.Fragment);
                setFragmentInputValue(val.Fragment);
              }
            }}
            disablePortal
            id="combo-box-demo"
            options={listActions}
            style={{
              float: "left",
            }}
            sx={{ m: 1, minWidth: 350 }}
            renderInput={(params) => (
              <TextField {...params} label="Action/Essence/Item" />
            )}
          />
          <Autocomplete
            inputValue={fragmentInputValue}
            value={fragmentInputValue}
            onInputChange={(event, newInputValue) => {
              setFragmentInputValue(newInputValue);
            }}
            onChange={(event, newValue) => {
              setFragment(newValue ?? "");
              setInputValue("");
            }}
            disablePortal
            id="combo-box-demo"
            options={fragmentList}
            style={{
              float: "left",
            }}
            sx={{ m: 1, minWidth: 275 }}
            renderInput={(params) => <TextField {...params} label="Fragment" />}
          />
          <FormControl sx={{ m: 1 }}>
            <FormControlLabel
              style={{
                alignItems: "left",
                verticalAlign: "middle",
                paddingTop: "5px",
              }}
              control={
                <Checkbox
                  checked={magitek}
                  onClick={() => {
                    setMagitek(!magitek);
                  }}
                />
              }
              label="Magitek"
            />
          </FormControl>
        </div>
      }
        {fragment &&
        (fragments[fragment].BSF ||
          fragments[fragment].CLL ||
          fragments[fragment].DR ||
          fragments[fragment].DRS ||
          (fragments[fragment].Quartermaster &&
            !fragments[fragment].Zadnor)) ? (
          <FragmentMap mapName="BSF" />
        ) : null}
        {fragment && (fragments[fragment].Zadnor || fragments[fragment].Dal) ? (
          <FragmentMap mapName="Zadnor" />
        ) : null}
    </>
  );
}

export default FragmentLookup;
