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

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
