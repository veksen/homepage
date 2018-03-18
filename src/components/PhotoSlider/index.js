import React, { Component } from "react";
import "./style.css";
import Arrow from "../../icons/Arrow";

class PhotoSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    };
  }

  previous() {
    const { currentIndex } = this.state;
    const { photos } = this.props;
    const previous = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    this.setState({ currentIndex: previous });
  }

  next() {
    const { currentIndex } = this.state;
    const { photos } = this.props;
    const nextIndex = photos.length === currentIndex + 1 ? 0 : currentIndex + 1;
    this.setState({ currentIndex: nextIndex });
  }

  render() {
    const { photos } = this.props;
    const { currentIndex } = this.state;

    return (
      <div {...this.props} className="PhotoSlider">
        <div className="PhotoSlider__wrapper">
          <div
            className="PhotoSlider__previous"
            onClick={() => this.previous()}
          >
            <Arrow direction="left" />
          </div>
          <div className="PhotoSlider__next" onClick={() => this.next()}>
            <Arrow />
          </div>
          {photos.map(photo => {
            const image = require(`../../photos/${photo.filename}`);
            return (
              <div
                key={photo.filename}
                className="PhotoSlider__item"
                style={{ left: `-${currentIndex * 100}%` }}
              >
                <img className="PhotoSlider__photo" src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PhotoSlider;
