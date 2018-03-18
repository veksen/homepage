import React, { Component } from "react";
import "./style.css";

class PhotoSettings extends Component {
  render() {
    const { visible } = this.props;
    const {
      focalLength,
      apertureSpeed,
      apertureLength,
      iso,
      lens
    } = this.props.settings;
    return (
      <div
        className={`PhotoSettings ${visible ? "PhotoSettings--visible" : ""}`}
      >
        <div className="PhotoSettings__setting">{focalLength}</div>
        <div className="PhotoSettings__setting">{apertureSpeed}</div>
        <div className="PhotoSettings__setting">{apertureLength}</div>
        <div className="PhotoSettings__setting">{iso}</div>
        <div className="PhotoSettings__setting">{lens}</div>
      </div>
    );
  }
}

export default PhotoSettings;
