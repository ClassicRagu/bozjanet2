"use client";
import { listAreas } from "@/static/weather/Areas";
import { listEurekaFarms } from "@/static/weather/Farms";
import { FarmInfo } from "@/types/weather/FarmInfo";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

type FarmSelectorProps = {
  setZoneValue: React.Dispatch<React.SetStateAction<string>>;
  zoneValue: string;
  setFarmValue: React.Dispatch<React.SetStateAction<string>>;
  farmValue: string;
  setFarmInfo: React.Dispatch<React.SetStateAction<FarmInfo>>;
};

function FarmSelector(props: FarmSelectorProps) {
  const { setZoneValue, zoneValue, setFarmValue, farmValue, setFarmInfo } =
    props;

  return (
    <div style={{ display: "inline" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Zone</InputLabel>
        <Select
          onChange={(event) => {
            if (event.target.value !== undefined) {
              setZoneValue(event.target.value);
              setFarmValue("");
            } else {
              setZoneValue("");
              setFarmValue("");
            }
          }}
          value={zoneValue}
          id="combo-box-demo"
          label={"Zone"}
          style={{
            minWidth: "350px",
            float: "left",
          }}
        >
          {listAreas.map((x) => {
            return (
              <MenuItem key={x} value={x}>
                {x}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {zoneValue != "" ? (
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label">Farm</InputLabel>
          <Select
            onChange={(event) => {
              if (event.target.value !== undefined) {
                setFarmValue(event.target.value);
                setFarmInfo(
                  listEurekaFarms
                    .find((x) => x.name == zoneValue)
                    ?.farms.find((x) => x.name == event.target.value)?.info ?? {
                    weathers: [""],
                    time: -1,
                  }
                );
              } else {
                setFarmValue("");
              }
            }}
            value={farmValue}
            id="combo-box-demo"
            label={"Farm"}
            style={{
              minWidth: "350px",
              float: "left",
            }}
          >
            {listEurekaFarms
              .find((x) => x.name == zoneValue)
              ?.farms.map((x) => {
                return (
                  <MenuItem value={x.name} key={x.name}>
                    <div style={{ display: "flex" }}>
                      <Avatar
                        sx={{ width: 22, height: 22, marginRight: "5px" }}
                        variant="rounded"
                        src={x.weatherIcon}
                      />
                      <Typography>{x.name}</Typography>
                    </div>
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      ) : null}
    </div>
  );
}

export default FarmSelector;
