export default function IPDashboard(props) {
  return (
    <div className="IPDashboard__container">
      <div className="IPDashboard__item">
        <h3 className="IPDashboard__header">IP Address</h3>
        <p className="IPDashboard__info">{props.ip}</p>
      </div>
      <div className="IPDashboard__item">
        <h3 className="IPDashboard__header">Location</h3>
        <p className="IPDashboard__info">{props.location}</p>
      </div>
      <div className="IPDashboard__item">
        <div>
          <h3 className="IPDashboard__header">Time Zone</h3>
          <p className="IPDashboard__info">{props.timeZone}</p>
        </div>
      </div>
      <div className="IPDashboard__item">
        <h3 className="IPDashboard__header">ISP</h3>
        <p className="IPDashboard__info">{props.isp}</p>
      </div>
    </div>
  );
}
