import React from "react";
import { shallow } from "enzyme";
import EmbeddedMenu from "./index";

describe("<EmbeddedMenu />", () => {
  it("renders", () => {
    const renderedComponent = shallow(<EmbeddedMenu />);
    expect(renderedComponent.type()).toBe("div");
  });

  it("renders burger when closed", () => {
    const renderedComponent = shallow(<EmbeddedMenu />);
    expect(renderedComponent.find("Burger")).toHaveLength(1);
    expect(renderedComponent.find("Cross")).toHaveLength(0);
  });

  it("opens and closes on clicking on the wrapper", () => {
    const renderedComponent = shallow(<EmbeddedMenu />);
    expect(renderedComponent.state().opened).toBe(false);
    renderedComponent.find(".EmbeddedMenu__burger-wrapper").simulate("click");
    expect(renderedComponent.state().opened).toBe(true);
    expect(renderedComponent.find("Cross")).toHaveLength(1);
    expect(renderedComponent.find("Burger")).toHaveLength(0);
  });

  it("has active class when open", () => {
    const renderedComponent = shallow(<EmbeddedMenu />);
    expect(renderedComponent.props().className).not.toMatch(/opened/);
    renderedComponent.find(".EmbeddedMenu__burger-wrapper").simulate("click");
    expect(renderedComponent.props().className).toMatch(/opened/);
  });
});
