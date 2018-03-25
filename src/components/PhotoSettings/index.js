import React, { Component } from "react";
import classnames from "classnames";
import "./style.css";

class PhotoSettings extends Component {
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
