// @flow

import React, { Component } from "react";
import "./style.css";
import SocialLink from "../SocialLink";

class Social extends Component<{}> {
  render() {
    const socialLinks = [
      { name: "GitHub", link: "https://github.com/veksen" },
      { name: "Twitter", link: "https://twitter.com/veksenn" },
      {
        name: "Stack Overflow",
        link: "http://stackoverflow.com/users/1732521/veksen"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/jean-philippe-sirois-lamarche-14789269"
      },
      { name: "Facebook", link: "https://www.facebook.com/jpslx" }
    ];

    return (
      <div className="Social">
        <h2>Stalk me!</h2>

        <div className="Social__links">
          {socialLinks.map(link => {
            return <SocialLink key={link.name} name={link.name} link={link.link} />;
          })}
        </div>
      </div>
    );
  }
}

export default Social;
