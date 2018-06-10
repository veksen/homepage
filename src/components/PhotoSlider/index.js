// @flow

import React, { Component } from "react";
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

  componentDidMount() {
    document.addEventListener("keydown", e => {
      /* eslint-disable default-case */
      switch (e.code) {
        case "ArrowLeft":
          this.previous();
          break;

        case "ArrowRight":
          this.next();
          break;

        case "ArrowUp":
          this.showSettings();
          break;

        case "ArrowDown":
          this.hideSettings();
          break;
      }
      /* eslint-enable default-case */
    });
  }

  previous = () => {
    const { currentIndex } = this.state;

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
    const draggedPercent = (e.deltaX * 2) / photoWidth;

    this.setState({ slideOffset: draggedPercent * 100 });

    if (draggedPercent < -0.3333) {
      this.hammerComponent.hammer.stop();
      this.setState({ slideOffset: 0 });
      this.next();
    }

    if (draggedPercent > 0.3333) {
      this.hammerComponent.hammer.stop();
      this.setState({ slideOffset: 0 });
      this.previous();
    }
  };

  onPanEnd = e => {
    this.setState({ slideOffset: 0 });
  };

  showSettings() {
    this.setState({ showSettings: true });
  }

  hideSettings() {
    this.setState({ showSettings: false });
  }

  toggleSettings() {
    this.setState({ showSettings: !this.state.showSettings });
  }

  render() {
    const { photos } = this.props;
    const { currentIndex, showSettings, slideOffset } = this.state;

    return (
      <div
        className={classnames("PhotoSlider", {
          "PhotoSlider--on-first": currentIndex === 0,
          "PhotoSlider--on-last": currentIndex + 1 === photos.length
        })}
      >
        <div className="PhotoSlider__full">
          {photos.map(photo => {
            const image = require(`../../photos/${photo.filename}`);
            return (
              <div
                key={photo.filename}
                className="PhotoSlider__full-photo"
                style={{ backgroundImage: `url(${image})`, left: `-${currentIndex * 100 - slideOffset}%` }}
              />
            );
          })}
        </div>

        <div className="PhotoSlider__outer-wrapper">
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
              <section className="PhotoSlider__inner-wrapper">
                {photos.map(photo => {
                  const image = require(`../../photos/${photo.filename}`);
                  return (
                    <div
                      key={photo.filename}
                      className="PhotoSlider__item"
                      style={{ left: `-${currentIndex * 100 - slideOffset}%` }}
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
      </div>
    );
  }
}

export default PhotoSlider;
