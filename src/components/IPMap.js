import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 39.9526, lng: -75.1652 }}>
      <Marker
        position={{ lat: 39.9526, lng: -75.1652 }}
        icon={{
          url: "/icon-location.svg",
          scaledSize: new window.google.maps.Size(30, 35),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 17),
        }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function IPMap() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
        loadingElement={<div style={{ height: `100vh` }} />}
        containerElement={<div style={{ height: `100vhvh` }} />}
        mapElement={<div style={{ height: `50vh` }} />}
      />
    </div>
  );
}

export { IPMap };
