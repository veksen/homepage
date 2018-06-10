// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./style.css";
import Logo from "../Logo";
import EmbeddedMenu from "../EmbeddedMenu";

type Props = {
  children?: any,
  className?: string
};

class Header extends Component<Props> {
  render() {
    return (
      <div {...this.props} className={classnames("Header", this.props.className)}>
        <Link to="/">
          <Logo className="Header__logo" />
        </Link>
        {this.props.children}
        <EmbeddedMenu />
      </div>
    );
  }
}

export default Header;
