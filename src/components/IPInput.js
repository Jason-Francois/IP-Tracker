import "../styles/components/IPInput.scss";

export default function IPInput() {
  return (
    <div className="IPTracker-container">
      <input
        id="IPTracker-input"
        type="text"
        placeholder="Search any IP Address or Domain"
      ></input>
      <button id="IPTracker-button">{">"}</button>
    </div>
  );
}
