// @flow

import React, { Component } from "react";
import Social from "../../components/Social";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import "./style.css";

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <Header />
        <div className="MainPage__wrapper">
          <Menu />
          <div className="MainPage__content">
            <div className="MainPage__intro">
              <h2 className="MainPage__header">
                Hello there{" "}
                <span role="img" aria-label="waving hand">
                  👋🏼
                </span>
              </h2>
              <p>
                I'm <strong>Jean-Philippe Sirois</strong>, a full-stack web developer based in beautiful Montreal,
                Canada. My hobbies and interests include mountain biking, snowboarding, photography, and design.
              </p>
            </div>
            <div className="MainPage__sub">
              <Social />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
