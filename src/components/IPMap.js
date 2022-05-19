import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 39.9526,
  lng: -75.1652,
};

const Map = (props) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDLhfoteTTNpaH0Lmd0DTinviODvhySIIY">
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
