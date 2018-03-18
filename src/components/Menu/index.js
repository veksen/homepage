import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Menu extends Component {
  render() {
    return (
      <ul className="Menu">
        <li>
          <div className="Menu__dropdown">Portfolio</div>
          <ul className="Menu__dropdown-sub">
            <li>
              <div className="Menu__link Menu__link--disabled">Web</div>
            </li>
            <li>
              <Link className="Menu__link" to="/photography">
                Photography
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div className="Menu__link Menu__link--disabled">Blog</div>
        </li>
      </ul>
    );
  }
}

export default Menu;
