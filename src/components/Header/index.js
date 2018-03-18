import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo";

class Header extends Component {
  render() {
    return (
      <div {...this.props} className="Header">
        <Link to="/">
          <Logo />
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
