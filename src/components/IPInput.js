import "../styles/components/IPInput.scss";
import React from "react";
import IPDashboard from "./IPDashboard";
const axios = require("axios");
export default function IPInput() {
  const [ipAddress, setipAddress] = React.useState("");
  const [location, setLocation] = React.useState("");
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
        return response.data;
      })
      .then((data) => {
        setLocation(
          `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
        );
        setTimeZone(`UTC ${data.location.timezone}`);
        setISP(data.isp);
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="IPTracker-container">
      <div className="IDTracker-input-container">
        <input
          id="IPTracker-input"
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
        location={location}
        timeZone={timeZone}
        isp={isp}
      />
    </div>
  );
}
