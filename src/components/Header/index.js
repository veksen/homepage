import React, { Component } from "react";
import "./style.css";
import Logo from "../Logo";

class Header extends Component {
  render() {
    return (
      <div {...this.props} className="Header">
        <Logo />
        {this.props.children}
      </div>
    );
  }
}

export default Header;
