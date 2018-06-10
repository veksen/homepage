// @flow

import React, { Component } from "react";
import classnames from "classnames";
import Burger from "../../icons/Burger";
import Cross from "../../icons/Cross";
import Menu from "../Menu";
import "./style.css";

class EmbeddedMenu extends Component {
  constructor() {
    super();
    this.state = {
      opened: false
    };
  }

  open() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const { opened } = this.state;
    return (
      <div
        {...this.props}
        className={classnames("EmbeddedMenu", this.props.className, { "EmbeddedMenu--opened": opened })}
      >
        <div className="EmbeddedMenu__burger-wrapper" onClick={() => this.open()}>
          {opened ? <Cross /> : <Burger />}
        </div>
        <Menu />
      </div>
    );
  }
}

export default EmbeddedMenu;
