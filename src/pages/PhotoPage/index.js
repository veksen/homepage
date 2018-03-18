import React, { Component } from "react";
import photos from "../../photos/photos.json";
import PhotoSlider from "../../components/PhotoSlider";
import Header from "../../components/Header";
import Arrow from "../../icons/Arrow";
import EmbeddedMenu from "../../components/EmbeddedMenu";

class PhotoPage extends Component {
  render() {
    return (
      <div className="PhotoPage">
        <EmbeddedMenu
          style={{ position: "absolute", top: "260px", zIndex: "10" }}
        />
        <div className="PhotoPage__wrapper">
          <Header
            style={{
              position: "absolute",
              zIndex: "5",
              left: "75px",
              right: "75px"
            }}
          >
            <div className="Header__menu">
              <div className="Header__menu-item Header__menu-item--back">
                <Arrow direction="left" /> back
              </div>
              <div className="Header__menu-item">sports</div>
              <div className="Header__menu-item">landscape</div>
            </div>
          </Header>

          <PhotoSlider
            style={{
              position: "absolute",
              marginTop: "160px",
              left: "75px",
              right: "75px"
            }}
            photos={photos}
          />
        </div>
      </div>
    );
  }
}

export default PhotoPage;
