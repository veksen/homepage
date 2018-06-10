// @flow

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import Raven from "raven-js";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactGA.initialize("UA-47549558-1");
Raven.config("https://6eb0a5f5d9c94df7bbaa61cc21c4f74d@sentry.io/744179").install();

const root = document.getElementById("root");
if (!root) {
  throw new Error("could not mount to root, #root not found");
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
registerServiceWorker();
