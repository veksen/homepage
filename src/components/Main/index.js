import React, { Component } from "react";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main__intro">
          <h2 className="Main__header">
            Hello there{" "}
            <span role="img" aria-label="waving hand">
              👋🏼
            </span>
          </h2>
          <p>
            I'm <strong>Jean-Philippe Sirois</strong>, a full-stack web developer based in beautiful Montrea, Canada. My
            hobbies and interests include mountain biking, snowboarding, photography, and design.
          </p>
        </div>
        <div className="Main__content">{this.props.children}</div>
      </div>
    );
  }
}

export default Main;
