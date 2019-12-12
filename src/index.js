import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  const [showDashboard, setDashboardStatus] = React.useState(false);
  return (
    <div className="App">
      {!showDashboard && <Auth success={setDashboardStatus} />}
      {showDashboard && <Dashboard />}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
