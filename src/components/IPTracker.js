import "../styles/components/IPInput.scss";
import React from "react";
import IPDashboard from "./IPDashboard";
import { IPMap } from "./IPMap";
const axios = require("axios");

function convertStringToFloat(float) {
  return parseFloat(float);
}

export default function IPInput() {
  const [ipAddress, setipAddress] = React.useState("");
  const [location, setLocation] = React.useState({
    lat: 39.9526,
    long: -75.1652,
  });
  const [locationString, setLocationString] = React.useState("");
  const [timeZone, setTimeZone] = React.useState("");
  const [isp, setISP] = React.useState("");

  const handleChange = (e) => {
    setipAddress(e.target.value);
  };
  // When button is clicked, populate fields on dashboard
  const handleClick = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_11zWGseUeMiC4iVAGE9V4tMlqdfMT&ipAddress=${ipAddress}`
      )
      .then((response) => {
        console.log(response.data)
        return response.data;
      })
      .then((data) => {
        setLocation({ lat: data.location.lat, long: data.location.lng });
        setLocationString(
          `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
        );
        setTimeZone(`UTC ${data.location.timezone}`);
        setISP(data.isp);
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="IPTracker-container">
      <div className="IPTracker-header">
        <h3>IP Address Tracker</h3>
      </div>
      <div className="IPTracker-input-container">
        <input
          className="IPTracker-input"
          type="text"
          placeholder="Search any IP Address or Domain"
          onChange={handleChange}
        ></input>
        <button id="IPTracker-button" onClick={handleClick}>
          {">"}
        </button>
      </div>
      <IPDashboard
        ip={ipAddress}
        location={locationString}
        timeZone={timeZone}
        isp={isp}
      />
      <IPMap location={{ lat: location.lat, long: location.long }} />
    </div>
  );
}
