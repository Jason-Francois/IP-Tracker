import "./styles/App.scss";
import IPTracker from "./components/IPHeader";
import Map from "./components/Map";
function App() {
  return (
    <div>
      {/* <IPTracker /> */}
      <Map />
    </div>
    // <div className="App">
    //   <div>
    //     IP Address Tracker Search for any IP address or domain IP Address
    //     Location Timezone UTC ISP
    //   </div>
    //   <div class="attribution">
    //     Challenge by{" "}
    //     <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
    //       Frontend Mentor
    //     </a>
    //     . Coded by <a href="#">Your Name Here</a>.
    //   </div>
    // </div>
  );
}

export default App;
