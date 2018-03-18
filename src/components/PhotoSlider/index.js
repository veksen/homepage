import React, { Component } from "react";
import "./style.css";

class PhotoSlider extends Component {
  render() {
    const { photos } = this.props;

    return (
      <div {...this.props} className="PhotoSlider">
        {photos.map(photo => {
          const image = require(`../../photos/${photo.filename}`);
          return (
            <div key={photo.filename} className="PhotoSlider__item">
              <img className="PhotoSlider__photo" src={image} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PhotoSlider;
