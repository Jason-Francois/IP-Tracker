import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const Map = (props) => {
  const center = {
    lat: props.location.lat,
    lng: props.location.lng,
  };
  const icon = {
    url: "/icon-location.svg",
    anchor: { x: 0, y: 0 },
    origin: { x: 0, y: 0 },
    scaledSize: { width: 20, height: 25 },
  };
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} icon={icon} />
      </GoogleMap>
    </LoadScript>
  );
};

const IPMap = (props) => {
  return (
    <div className="IPMap-container" style={{ height: "100vh" }}>
      {Map(props)}
    </div>
  );
};

export { IPMap };
