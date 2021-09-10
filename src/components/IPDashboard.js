import "../styles/components/IPDashboard.scss";
export default function IPDashboard(props) {
  return (
    <div className="IPDashboard-container">
      <div className="IPDashboard-item">
        <h3 className="IPDashboard-item-header">IP Address</h3>
        {props.ip}
      </div>
      <div className="IPDashboard-item">
        <h3 className="IPDashboard-item-header">Location</h3>
        {props.location}
      </div>
      <div className="IPDashboard-item">
        <div>
          <h3 className="IPDashboard-item-header">Time Zone</h3>
          {props.timeZone}
        </div>
      </div>
      <div className="IPDashboard-item">
        <h3 className="IPDashboard-item-header">ISP</h3>
        {props.isp}
      </div>
    </div>
  );
}
