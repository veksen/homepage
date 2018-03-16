import React, { Component } from "react";
import logo from "./logo.png";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default Header;
