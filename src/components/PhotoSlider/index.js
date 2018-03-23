import React, { Component, Fragment } from "react";
import Hammer from "react-hammerjs";
import classnames from "classnames";
import "./style.css";
import Arrow from "../../icons/Arrow";
import PhotoSettings from "../PhotoSettings";

class PhotoSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      showSettings: false,
      slideOffset: 0
    };
  }

  previous = () => {
    const { currentIndex } = this.state;
    const { photos } = this.props;

    if (currentIndex !== 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  next = () => {
    const { currentIndex } = this.state;
    const { photos } = this.props;

    if (currentIndex + 1 < photos.length) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  onPan = e => {
    const photoWidth = this.photo.clientWidth;
    const draggedPercent = e.deltaX * 2 / photoWidth;

    this.setState({ slideOffset: draggedPercent * 100 });

    if (draggedPercent > 0.3333) {
      this.hammerComponent.hammer.stop();
      this.setState({ slideOffset: 0 });
      this.next();
    }

    if (draggedPercent < -0.3333) {
      this.hammerComponent.hammer.stop();
      this.setState({ slideOffset: 0 });
      this.previous();
    }
  };

  onPanEnd = e => {
    this.setState({ slideOffset: 0 });
  };

  toggleSettings() {
    this.setState({ showSettings: !this.state.showSettings });
  }

  render() {
    const { photos } = this.props;
    const { currentIndex, showSettings, slideOffset } = this.state;

    return (
      <div
        {...this.props}
        className={classnames("PhotoSlider", {
          "PhotoSlider--on-first": currentIndex === 0,
          "PhotoSlider--on-last": currentIndex + 1 === photos.length
        })}
      >
        <div className="PhotoSlider__toggle-settings" onClick={() => this.toggleSettings()}>
          toggle settings
        </div>
        <div className="PhotoSlider__wrapper">
          <div className="PhotoSlider__previous" onClick={() => this.previous()}>
            <Arrow direction="left" />
          </div>
          <div className="PhotoSlider__next" onClick={() => this.next()}>
            <Arrow />
          </div>

          <div className="PhotoSlider__count">
            {currentIndex + 1} / {photos.length}
          </div>

          <Hammer onPan={this.onPan} onPanEnd={this.onPanEnd} ref={instance => (this.hammerComponent = instance)}>
            <section className="PhotoSlider__outer-wrapper">
              {photos.map(photo => {
                const image = require(`../../photos/${photo.filename}`);
                return (
                  <div
                    key={photo.filename}
                    className="PhotoSlider__item"
                    style={{ left: `-${currentIndex * 100 + slideOffset}%` }}
                  >
                    <img className="PhotoSlider__photo" src={image} alt="" ref={el => (this.photo = el)} />
                    <PhotoSettings settings={photo.settings} visible={showSettings} />
                  </div>
                );
              })}
            </section>
          </Hammer>
        </div>
      </div>
    );
  }
}

export default PhotoSlider;
