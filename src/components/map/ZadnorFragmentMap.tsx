"use client";
import * as React from "react";
import { Card } from "@mui/material";
import {
  MapContainer,
  ImageOverlay,
  Popup,
  Marker,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { fragments } from "@/static/map/Actions";
import L, { Icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import { useAtom } from "jotai";
import { fragmentState } from "@/hooks/map/fragmentState";
import { mapXY } from "@/functions/map/mapXY";
import { ZadnorClusterMobs } from "@/static/map/ZadnorClusterMobs";
import { magitekState } from "@/hooks/map/magitekState";
import { MapMarkers } from "./MapMarkers/MapMarkers";

const bounds: LatLngBoundsExpression = [
  [1, 1],
  [42, 42],
];

function ZadnorFragmentMap() {
  const [fragment] = useAtom(fragmentState);
  const [magitek] = useAtom(magitekState);

  return (
    <div
      style={{
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
            crs={L.CRS.Simple}
            bounds={bounds}
          >
            {magitek
              ? ZadnorClusterMobs.map((x, index) => {
                  return (
                    <Circle
                      key={`cluster-mob-${index}`}
                      center={mapXY(x[0], x[1]) as LatLngTuple}
                      radius={0.06}
                      color={"grey"}
                    ></Circle>
                  );
                })
              : null}
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
            <MapMarkers fragment={fragment} zone={fragments[fragment].Zadnor} />
            <ImageOverlay url="Zadnor.jpg" bounds={bounds} />
          </MapContainer>
        </div>
      </Card>
    </div>
  );
}

export default ZadnorFragmentMap;
