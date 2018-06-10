import React from "react";
import { shallow, mount } from "enzyme";
import ReactRouterEnzymeContext from "react-router-enzyme-context";
import PhotoMenu from "./index";

describe("<PhotoMenu />", () => {
  it("renders passed categories", () => {
    const options = new ReactRouterEnzymeContext();
    const renderedComponent = mount(<PhotoMenu categories={["my cat 1", "my cat 2"]} />, options.get());
    expect(renderedComponent.find("a.Header__menu-item").not(".Header__menu-item--back")).toHaveLength(2);
    expect(
      renderedComponent
        .find("a.Header__menu-item")
        .at(1)
        .text()
    ).toBe("my cat 1");
    expect(
      renderedComponent
        .find("a.Header__menu-item")
        .at(2)
        .text()
    ).toBe("my cat 2");
  });

  it("renders active category", () => {
    const options = new ReactRouterEnzymeContext();
    const renderedComponent = mount(
      <PhotoMenu categories={["my cat 1", "my cat 2"]} currentCategory={"my cat 2"} />,
      options.get()
    );
    expect(
      renderedComponent
        .find("a.Header__menu-item")
        .at(2)
        .props().className
    ).toMatch(/active/);
  });
});
