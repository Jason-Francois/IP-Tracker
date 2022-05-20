import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const Map = (props) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: props.location.lat, lng: props.location.lng }}
        zoom={10}
      ></GoogleMap>
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
