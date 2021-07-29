import React from "react";
import ReactDom from "react-dom";
import App from "./src";
import "./style.scss";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
