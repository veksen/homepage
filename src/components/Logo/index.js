// @flow

import React, { Component } from "react";
import logo from "../../logo.png";

class Logo extends Component {
  render() {
    return (
      <div {...this.props}>
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default Logo;
