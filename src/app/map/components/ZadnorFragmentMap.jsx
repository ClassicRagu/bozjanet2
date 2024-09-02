'use client'
import * as React from "react";
import { Card } from "@mui/material";
import {
  MapContainer,
  ImageOverlay,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { fragments } from "../locations/Actions";
import { Icon } from "leaflet";
import { useAtom } from "jotai";
import { fragmentState } from "../hooks/fragmentState";
import { zadnorMarkerState } from "../hooks/zadnorMarkerState";

const bounds = [
  [34, 9],
  [32, 11.4],
];

function ZadnorFragmentMap() {
  const [fragment] = useAtom(fragmentState);
  const [zadnorMarkers] = useAtom(zadnorMarkerState)

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
        <div style={{ width: "100%", height: "600px" }} className="App">
          <MapContainer
            center={[33, 10.18]}
            zoom={8.499}
            maxZoom={11}
            minZoom={8.499}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
          >
            {fragment && fragments[fragment].Dal ? (
              <Marker
                position={[33.6, 10.15]}
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
            <ImageOverlay
              url="Zadnor.jpg"
              bounds={bounds}
            />
          </MapContainer>
        </div>
      </Card>
    </div>
  );
}

export default ZadnorFragmentMap;
