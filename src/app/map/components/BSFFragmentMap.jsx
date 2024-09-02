'use client'
import * as React from "react";
import { Card } from "@mui/material";
import {
  MapContainer,
  ImageOverlay,
  Popup,
  Marker,
} from "react-leaflet";

import { fragments } from "../locations/Actions";
import { Icon } from "leaflet";
import { useAtom } from "jotai";
import { fragmentState } from "../hooks/fragmentState";
import { bsfMarkerState } from "../hooks/bsfMarkerState";

const bounds = [
  [34, 9],
  [32, 11],
];

function BSFFragmentMap() {
  const [fragment] = useAtom(fragmentState);
  const [bsfMarkers] = useAtom(bsfMarkerState)

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
            center={[33, 10]}
            zoom={9}
            maxZoom={11}
            minZoom={9}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
          >
            {fragment && fragments[fragment].Quartermaster ? (
              <Marker
                position={[32.6, 9.65]}
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
                position={[33.4, 9.85]}
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
                position={[32.54, 9.6]}
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
            <ImageOverlay
              url="The Bozjan Southern Front.jpg"
              bounds={bounds}
            />
          </MapContainer>
        </div>
      </Card>
    </div>
  );
}

export default BSFFragmentMap;
