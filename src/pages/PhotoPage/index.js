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

          <PhotoSlider
            style={{
              position: "absolute",
              marginTop: "160px",
              marginBottom: "60px",
              left: "75px",
              right: "75px"
            }}
            photos={currentCategory ? photos.filter(photo => photo.category === this.state.currentCategory) : photos}
          />
        </div>
      </div>
    );
  }
}

export default PhotoPage;
