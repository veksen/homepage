import React, { Component } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import MainPage from "./pages/MainPage";
import PhotoPage from "./pages/PhotoPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/photography/" component={PhotoPage} />
            <Route path="/photography/:category" component={PhotoPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
