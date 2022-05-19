import React from "react";
import IPDashboard from "./IPDashboard";
import { IPMap } from "./IPMap";
const axios = require("axios");

export default function IPInput() {
  const [ipAddress, setipAddress] = React.useState("170.115.187.68");
  const [location, setLocation] = React.useState({
    lat: 39.9526,
    lng: -75.1652,
  });
  const [locationString, setLocationString] = React.useState("");
  const [timeZone, setTimeZone] = React.useState("");
  const [isp, setISP] = React.useState("");

  const handleChange = (e) => {
    setipAddress(e.target.value);
  };

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_11zWGseUeMiC4iVAGE9V4tMlqdfMT&ipAddress=${ipAddress}`
      );
      const data = await response.data;
      setLocation({ lat: data.location.lat, lng: data.location.lng });
      setLocationString(
        `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
      );
      setTimeZone(`UTC ${data.location.timezone}`);
      setISP(data.isp);
    } catch (err) {
      console.error(err);
    }
  }

  // When button is clicked, populate fields on dashboard
  const handleClick = () => {
    debugger;
    fetchData();
  };
  React.useEffect(() => {
    fetchData();
    document.querySelector(".IPTracker__input").value = ipAddress;
  }, []);
  return (
    <div>
      <div className="IPTracker__container">
        <div className="IPTracker__content">
          <div className="IPTracker__header">
            <h3>IP Address Tracker</h3>
          </div>
          <div className="IPTracker__wrapper">
            <div className="IPTracker__input-container">
              <input
                className="IPTracker__input"
                type="text"
                placeholder="Search any IP Address or Domain"
                onChange={handleChange}
              ></input>
              <button id="IPTracker__button" onClick={handleClick}>
                {">"}
              </button>
            </div>
          </div>
          <IPDashboard
            ip={ipAddress}
            location={locationString}
            timeZone={timeZone}
            isp={isp}
          />
        </div>
        <IPMap location={{ lat: location.lat, lng: location.lng }} />
      </div>
    </div>
  );
}
