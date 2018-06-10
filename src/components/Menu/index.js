// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../icons/Arrow";
import "./style.css";

class Menu extends Component<{}> {
  render() {
    return (
      <ul className="Menu">
        <li className="Menu__category">
          <div className="Menu__dropdown">
            Portfolio <Arrow direction="down" />
          </div>
          <ul className="Menu__dropdown-sub">
            <li>
              <div className="Menu__link Menu__link--disabled">Web</div>
            </li>
            <li>
              <Link className="Menu__link" to="/photography">
                Photography
                <Arrow />
              </Link>
            </li>
          </ul>
        </li>

        <li className="Menu__category">
          <div className="Menu__link Menu__link--disabled">Blog</div>
        </li>
      </ul>
    );
  }
}

export default Menu;
