import { atom } from "jotai";
import { fragmentState } from "./fragmentState";
import { fragments } from "../locations/Actions";
import { Circle, Popup, Marker, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { setColor } from "../components/functions/setColor";
import { Icon } from "leaflet";
import { mapXY } from "../components/functions/mapXY";

export const zadnorMarkerState = atom((get) => {
  const fragment = get(fragmentState);
  if (fragment !== "") {
    const tmp = [];
    if (fragments[fragment].Zadnor)
      fragments[fragment].Zadnor.forEach((locations, index) => {
        locations.forEach((monster) => {
          if (monster.Level === "Star") {
            tmp.push(
              <Marker
                key={`${monster.Monster}-${index}`}
                position={[42.9 - monster.Location[1], monster.Location[0]]}
                icon={
                  new Icon({
                    iconUrl: "starsmile.png",
                    iconSize: [41, 41],
                    iconAnchor: [20, 21],
                  })
                }
              >
                <Popup>
                  {monster.Monster} <br /> Level:{monster.Level}
                </Popup>
              </Marker>
            );
          } else if (monster) {
            if (monster.Positions) {
              const positions = monster.Positions.map((x) => {
                return mapXY(x[0], x[1]);
              });
              tmp.push(
                <Polygon
                  key={`${monster.Monster}-${index}`}
                  pathOptions={{
                    fillColor: setColor(monster.Level),
                    color: setColor(monster.Level),
                  }}
                  positions={positions}
                >
                  <Popup>
                    {monster.Monster} <br /> Level:{monster.Level} <br />{" "}
                    {monster.additionalInfo}
                  </Popup>
                </Polygon>
              );
            } else if (monster.Level == "Critical Engagement") {
              tmp.push(
                <Circle
                  key={`${monster.Monster}-${index}`}
                  center={mapXY(monster.Location[0], monster.Location[1])}
                  pathOptions={{
                    fillColor: setColor(monster.Level),
                    color: setColor(monster.Level),
                  }}
                  radius={monster.radius}
                >
                  <Popup>
                    {monster.Monster} <br /> Level:{monster.Level} <br />{" "}
                    {monster.additionalInfo}
                  </Popup>
                </Circle>
              );
            }
          }
        });
      });
    return tmp;
  } else {
    return null;
  }
});
