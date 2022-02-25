import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ReactNotifications } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
import "animate.css";

ReactDOM.render(
  <>
    <ReactNotifications />
    <App />
  </>,
  document.getElementById("root")
);
