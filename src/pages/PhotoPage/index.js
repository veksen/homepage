import React, { Component } from "react";
import { Link } from "react-router-dom";
import photos from "../../photos/photos.json";
import PhotoSlider from "../../components/PhotoSlider";
import Header from "../../components/Header";
import Arrow from "../../icons/Arrow";
import EmbeddedMenu from "../../components/EmbeddedMenu";

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
            <div className="Header__menu">
              <div className="Header__menu-item Header__menu-item--back">
                <Arrow direction="left" /> back
              </div>

              {categories.map(category => {
                return (
                  <Link
                    key={category}
                    to={`/photography/${category}`}
                    className={`Header__menu-item ${category === currentCategory ? "Header__menu-item--active" : ""}`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>
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
