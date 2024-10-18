import {
  FormControlLabel,
  FormGroup, Switch
} from "@mui/material";

type LongerWindowsToggleProps = {
  setLongerWindowState: React.Dispatch<React.SetStateAction<boolean>>;
  longerWindowState: boolean;
};

function LongerWindowsToggle(props: LongerWindowsToggleProps) {
  const {setLongerWindowState, longerWindowState} = props;

  return (
    <FormGroup style={{ display: "flex", alignItems: "center" }}>
      <FormControlLabel
        control={
          <Switch
            checked={longerWindowState}
            onChange={(e) => setLongerWindowState(e.target.checked)}
          />
        }
        label="Show longer windows"
      />
    </FormGroup>
  );
}

export default LongerWindowsToggle;
