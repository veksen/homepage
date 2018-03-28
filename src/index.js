import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactGA.initialize("UA-47549558-1");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
