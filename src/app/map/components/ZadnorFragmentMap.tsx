"use client";
import * as React from "react";
import { Card } from "@mui/material";
import { MapContainer, ImageOverlay, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { fragments } from "../locations/Actions";
import L, { Icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import { useAtom } from "jotai";
import { fragmentState } from "../hooks/fragmentState";
import { zadnorMarkerState } from "../hooks/zadnorMarkerState";
import { mapXY } from "./functions/mapXY";

const bounds: LatLngBoundsExpression = [
  [1, 1],
  [41.9, 41.9],
];

function ZadnorFragmentMap() {
  const [fragment] = useAtom(fragmentState);
  const [zadnorMarkers] = useAtom(zadnorMarkerState);

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
            style={{ width: "100%", height: "100%" }}
            crs={L.CRS.Simple}
            bounds={bounds}
          >
            {fragment && fragments[fragment].Dal ? (
              <Marker
                position={mapXY(25.9, 8.2) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "CLL.png",
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                  })
                }
              >
                <Popup>First Boss Dal Chest</Popup>
              </Marker>
            ) : null}
            {zadnorMarkers}
            <ImageOverlay url="Zadnor.jpg" bounds={bounds} />
          </MapContainer>
        </div>
      </Card>
    </div>
  );
}

export default ZadnorFragmentMap;