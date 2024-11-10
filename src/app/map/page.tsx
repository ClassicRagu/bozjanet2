"use client";
import * as React from "react";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel, Link,
  TextField
} from "@mui/material";
import { Card } from "@mui/material";
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

const BSFFragmentMap = dynamic(() => import("@/components/map/BSFFragmentMap"), {
  ssr: false,
});
const ZadnorFragmentMap = dynamic(
  () => import("@/components/map/ZadnorFragmentMap"),
  { ssr: false }
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
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              maxWidth: 800,
              width: "100%",
            }}
            style={{
              textAlign: "center",
              display: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p>
              Thank you to <Link href="https://xivapi.com/">XIVApi</Link> for
              providing the map and icons.
            </p>
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
                    const val = actions.filter(
                      (x) => x.ActionName === newValue
                    )[0];
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
                  renderInput={(params) => (
                    <TextField {...params} label="Fragment" />
                  )}
                />
              <FormControl sx={{ m: 1 }}>
                <FormControlLabel
                  style={{
                    alignItems: "left",
                    verticalAlign: "middle",
                    paddingTop: "5px"
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
          </Card>
        </div>
      }
      <>
        {fragment &&
        (fragments[fragment].BSF ||
          fragments[fragment].CLL ||
          fragments[fragment].DR ||
          fragments[fragment].DRS ||
          (fragments[fragment].Quartermaster &&
            !fragments[fragment].Zadnor)) ? (
          <BSFFragmentMap />
        ) : null}
        {fragment && (fragments[fragment].Zadnor || fragments[fragment].Dal) ? (
          <ZadnorFragmentMap />
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              maxWidth: 800,
              width: "100%",
            }}
            style={{
              textAlign: "center",
              display: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p>
              FINAL FANTASY XIV © 2010 - 2024 SQUARE ENIX CO., LTD. FINAL
              FANTASY, FINAL FANTASY XIV, and FFXIV are registered trademarks or
              trademarks of Square Enix Holdings Co., Ltd. All material used
              under license.
            </p>
          </Card>
        </div>
      </>
    </>
  );
}

export default FragmentLookup;
