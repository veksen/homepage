import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Social from "./components/Social";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App__wrapper">
          <Menu />
          <Main>
            <Social />
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
