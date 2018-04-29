import React, { Component } from "react";
import photos from "../../photos/photos.json";
import PhotoSlider from "../../components/PhotoSlider";
import Header from "../../components/Header";
import EmbeddedMenu from "../../components/EmbeddedMenu";
import PhotoMenu from "../../components/PhotoMenu";

class PhotoPage extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: null
    };
  }

  componentWillReceiveProps(nextProps) {
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
