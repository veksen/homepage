// @flow

import React, { Component } from "react";
import { default as SVGLogo } from "../../icons/Logo";

type Props = {
  className?: string
};

class Logo extends Component<Props> {
  render() {
    return (
      <div {...this.props}>
        <SVGLogo />
      </div>
    );
  }
}

export default Logo;
