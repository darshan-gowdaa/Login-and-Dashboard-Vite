// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { AppToast } from "./components/Toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <>
      <App />
      <AppToast />
    </>
  </Router>
);
