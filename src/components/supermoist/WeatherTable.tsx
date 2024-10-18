import { WindowTimes } from "@/types/weather/WindowTimes";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type WeatherTableProps = {
  findSnowState: number;
  snowState: WindowTimes[];
};

function WeatherTable(props: WeatherTableProps) {
  const { findSnowState, snowState } = props;

  return (
    <TableContainer component={Paper} style={{ width: "80%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>ET</TableCell>
            {findSnowState > 2 ? <TableCell>Windows</TableCell> : null}
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {snowState.map((x, index) => {
            return (
              <TableRow key={`supermoist-${index}`}>
                <TableCell key={`${index}`}>
                  {x.startTime.toLocaleString()}
                </TableCell>
                <TableCell>{x.startTimeET}</TableCell>
                {findSnowState > 2 ? (
                  <TableCell>{x.totalWindows}</TableCell>
                ) : null}
                <TableCell>{`<t:${x.startTime.getTime() / 1000}:F>`}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WeatherTable;
