import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Arrow from "../../icons/Arrow";

class PhotoMenu extends Component {
  render() {
    const { categories, currentCategory } = this.props;
    return (
      <div className="Header__menu">
        <div className="Header__menu-item Header__menu-item--back">
          <Arrow direction="left" /> back
        </div>

        {categories.map(category => {
          return (
            <Link
              key={category}
              to={`/photography/${category}`}
              className={classnames("Header__menu-item", {
                "Header__menu-item--active": category === currentCategory
              })}
            >
              {category}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default PhotoMenu;
