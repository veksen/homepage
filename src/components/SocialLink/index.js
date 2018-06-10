// @flow

import React, { Component } from "react";
import classnames from "classnames";
import "./style.css";
import SocialIcon from "../SocialIcon";
import { slugify } from "../../utils";
import Arrow from "../../icons/Arrow";

type Props = {
  link: string,
  name: string
};

class SocialLink extends Component<Props> {
  render() {
    const { link, name } = this.props;
    const slugifiedName = slugify(name);
    return (
      <a href={link} className={classnames("Social__link", `Social__link--${slugifiedName}`)} title={name}>
        <SocialIcon name={name} />
        <div className="Social__arrow">
          <Arrow />
        </div>
      </a>
    );
  }
}

export default SocialLink;
