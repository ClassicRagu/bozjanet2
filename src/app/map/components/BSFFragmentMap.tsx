"use client";
import { Card } from "@mui/material";
import { MapContainer, ImageOverlay, Popup, Marker } from "react-leaflet";

import { fragments } from "../locations/Actions";
import L, { Icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import { useAtom } from "jotai";
import { fragmentState } from "../hooks/fragmentState";
import { bsfMarkerState } from "../hooks/bsfMarkerState";
import { mapXY } from "./functions/mapXY";

const bounds: LatLngBoundsExpression  = [
  [1, 1],
  [41.9, 41.9],
];

function BSFFragmentMap() {
  const [fragment] = useAtom(fragmentState);
  const [bsfMarkers] = useAtom(bsfMarkerState);

  return (
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
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", height: "650px" }} className="App">
          <MapContainer
            center={[21.5, 21.5]}
            zoom={4}
            minZoom={4}
            maxZoom={8}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
            crs={L.CRS.Simple}
            bounds={bounds}
          >
            {fragment && fragments[fragment].Quartermaster ? (
              <Marker
                position={mapXY(14.2, 29.6) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "starsmile.png",
                    iconSize: [41, 41],
                    iconAnchor: [20, 21],
                  })
                }
              >
                <Popup>Resistance Quartermaster</Popup>
              </Marker>
            ) : null}
            {fragment && fragments[fragment].CLL ? (
              <Marker
                position={mapXY(18.9, 13.0) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "CLL.png",
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                  })
                }
              >
                <Popup>CLL Prisoner Chests</Popup>
              </Marker>
            ) : null}
            {fragment && (fragments[fragment].DR || fragments[fragment].DRS) ? (
              <Marker
                position={mapXY(12.5, 32.1) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "Save The Queen.png",
                    iconSize: [34, 34],
                    iconAnchor: [17, 17],
                  })
                }
              >
                <Popup>
                  Delubrum Reginae {fragments[fragment].DRS ? "(Savage)" : null}
                </Popup>
              </Marker>
            ) : null}
            {bsfMarkers}
            <ImageOverlay url="The Bozjan Southern Front.jpg" bounds={bounds} />
          </MapContainer>
        </div>
      </Card>
    </div>
  );
}

export default BSFFragmentMap;
