import React from "react";
import IPDashboard from "./IPDashboard";
import { IPMap } from "./IPMap";

const axios = require("axios");
const defaultIPInput = {
  ipAddress: "170.115.187.68",
  location: {
    lat: 39.9526,
    lng: -75.1652,
  },
};
export default function IPInput() {
  const [ipAddress, setipAddress] = React.useState(defaultIPInput.ipAddress);
  const [location, setLocation] = React.useState(defaultIPInput.location);
  const [locationString, setLocationString] = React.useState("");
  const [timeZone, setTimeZone] = React.useState("");
  const [isp, setISP] = React.useState("");

  const handleChange = (e) => {
    setipAddress(e.target.value);
  };

  async function fetchData() {
    try {
      // Display an alert if IP is invalid
      if (!validateIP(ipAddress)) {
        alert("IP Address invalid. Please enter a public IP Address");
      } else {
        const response = await axios.get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${ipAddress}`
        );
        const data = await response.data;
        setLocation({ lat: data.location.lat, lng: data.location.lng });
        setLocationString(
          `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
        );
        setTimeZone(`UTC ${data.location.timezone}`);
        setISP(data.isp);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const validateIP = (ip) => {
    const regex =
      /^(?!(10)|192\.168|172\.(2[0-9]|1[6-9]|3[0-2]))[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;
    return regex.test(ip);
  };
  // When button is clicked or enter key is
  // pressed, populate fields on dashboard
  const handleClick = () => {
    fetchData();
  };
  const handleKeyPress = (e) => {
    if (e.which == 13) {
      fetchData();
    }
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
                onKeyDown={handleKeyPress}
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
