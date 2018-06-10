// @flow

import React, { Component } from "react";
import classnames from "classnames";
import "./style.css";

type Props = {
  visible: boolean,
  settings: {
    focalLength: string,
    apertureSpeed: string,
    apertureLength: string,
    iso: string,
    lens: string
  }
};

class PhotoSettings extends Component<Props> {
  render() {
    const { visible } = this.props;
    const { focalLength, apertureSpeed, apertureLength, iso, lens } = this.props.settings;
    return (
      <div className={classnames("PhotoSettings", { "PhotoSettings--visible": visible })}>
        <div className="PhotoSettings__setting">{focalLength}</div>
        <div className="PhotoSettings__setting">{apertureSpeed}</div>
        <div className="PhotoSettings__setting">{apertureLength}</div>
        <div className="PhotoSettings__setting">ISO {iso}</div>
        <div className="PhotoSettings__setting">{lens}</div>
      </div>
    );
  }
}

export default PhotoSettings;
