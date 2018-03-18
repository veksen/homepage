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
      currentCategory: nextProps.match.params.category
    });
  }

  render() {
    const categories = ["sports", "landscape"];
    const { currentCategory } = this.state;

    // TODO: temp, remove with styled-components
    const PhotoSliderStyle = {
      position: "absolute",
      marginTop: "160px",
      marginBottom: "60px",
      left: "75px",
      right: "75px"
    };

    return (
      <div className="PhotoPage">
        <EmbeddedMenu style={{ position: "absolute", top: "260px", zIndex: "10" }} />
        <div className="PhotoPage__wrapper">
          <Header
            style={{
              position: "absolute",
              zIndex: "5",
              left: "75px",
              right: "75px"
            }}
          >
            <PhotoMenu categories={categories} currentCategory={currentCategory} />
          </Header>

          {currentCategory === null ? <PhotoSlider style={PhotoSliderStyle} photos={photos} /> : null}
          {categories.map(category => {
            const photosByCategory = photos.filter(photo => photo.category === currentCategory);
            return category === currentCategory ? (
              <PhotoSlider style={PhotoSliderStyle} photos={photosByCategory} />
            ) : null;
          })}
        </div>
      </div>
    );
  }
}

export default PhotoPage;
