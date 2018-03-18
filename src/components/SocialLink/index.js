import React, { Component } from "react";
import classnames from "classnames";
import "./style.css";
import SocialIcon from "../SocialIcon";
import { slugify } from "../../utils";
import Arrow from "../../icons/Arrow";

class SocialLink extends Component {
  render() {
    const { link, name } = this.props;
    const slugifiedName = slugify(name);
    return (
      <a href={link} className={classnames("Social__link", `Social__link--${slugifiedName}`)} title={name}>
        <SocialIcon name={name} />
        {/* <span className="Social__text">{name}</span> */}
        <div className="Social__arrow">
          <Arrow />
        </div>
      </a>
    );
  }
}

export default SocialLink;
