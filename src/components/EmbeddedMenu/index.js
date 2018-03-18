import React, { Component } from "react";
import Burger from "../../icons/Burger";
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
        className={`EmbeddedMenu ${opened ? "EmbeddedMenu--opened" : ""}`}
      >
        <div
          className="EmbeddedMenu__burger-wrapper"
          onClick={() => this.open()}
        >
          <Burger />
        </div>
        <Menu />
      </div>
    );
  }
}

export default EmbeddedMenu;
