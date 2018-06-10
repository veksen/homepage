// @flow

import React, { Component } from "react";
import logo from "../../logo.png";

type Props = {
  className?: string
};

class Logo extends Component<Props> {
  render() {
    return (
      <div {...this.props}>
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default Logo;
