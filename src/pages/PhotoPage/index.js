// @flow

import React, { Component } from "react";
import type { Match } from "react-router-dom";
import photos from "../../photos/photos.json";
import PhotoSlider from "../../components/PhotoSlider";
import Header from "../../components/Header";
import EmbeddedMenu from "../../components/EmbeddedMenu";
import PhotoMenu from "../../components/PhotoMenu";

type Props = {
  match: Match
};

type State = {
  currentCategory: ?string
};

class PhotoPage extends Component<Props, State> {
  state: State = {
    currentCategory: null
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      currentCategory: nextProps.match.params.category || null
    });
  }

  render() {
    const categories = ["sports"];
    const { currentCategory } = this.state;

    return (
      <div className="PhotoPage">
        <EmbeddedMenu className="EmbeddedMenu--PhotoPage" />
        <div className="PhotoPage__wrapper">
          <Header className="Header--PhotoPage">
            <PhotoMenu categories={categories} currentCategory={currentCategory} />
          </Header>

          {currentCategory === null ? <PhotoSlider photos={photos} /> : null}
          {categories.map(category => {
            const photosByCategory = photos.filter(photo => photo.category === currentCategory);
            return category === currentCategory ? <PhotoSlider photos={photosByCategory} /> : null;
          })}
        </div>
      </div>
    );
  }
}

export default PhotoPage;
