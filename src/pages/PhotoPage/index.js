import React, { Component } from "react";
import photos from "../../photos/photos.json";

class PhotoPage extends Component {
  render() {
    return (
      <div className="PhotoPage">
        <div>ello</div>

        {photos.map(photo => {
          const image = require(`../../photos/${photo.filename}`);
          return <img src={image} alt="" />;
        })}
      </div>
    );
  }
}

export default PhotoPage;
