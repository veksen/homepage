import React from "react";
import { mount, shallow } from "enzyme";
import ReactRouterEnzymeContext from "react-router-enzyme-context";
import PhotoPage from "./index";

describe("<PhotoPage />", () => {
  it("renders", () => {
    const renderedComponent = shallow(<PhotoPage />);
    expect(renderedComponent.type()).toBe("div");
  });

  it("sets currentCategory state to match route", () => {
    const options = new ReactRouterEnzymeContext();
    const renderedComponent = mount(<PhotoPage match={{ params: { category: "mycat" } }} />, options.get());
    expect(renderedComponent.state().currentCategory).toBe(null);
    renderedComponent.setProps();
    expect(renderedComponent.state().currentCategory).toBe("mycat");
  });

  it("sets currentCategory state to match route - on null", () => {
    const options = new ReactRouterEnzymeContext();
    const renderedComponent = mount(<PhotoPage match={{ params: { category: "mycat" } }} />, options.get());
    expect(renderedComponent.state().currentCategory).toBe(null);
    renderedComponent.setProps();
    expect(renderedComponent.state().currentCategory).toBe("mycat");
    renderedComponent.setProps({ match: { params: {} } });
    expect(renderedComponent.state().currentCategory).toBe(null);
  });

  it("renders a photo slider if not passed any category", () => {
    const options = new ReactRouterEnzymeContext();
    const renderedComponent = mount(<PhotoPage match={{ params: {} }} />, options.get());
    renderedComponent.setProps();
    expect(renderedComponent.find("PhotoSlider")).toHaveLength(1);
  });

  it("renders a photo slider when passed a valid category", () => {
    const options = new ReactRouterEnzymeContext();
    const renderedComponent = mount(<PhotoPage match={{ params: { category: "sports" } }} />, options.get());
    renderedComponent.setProps();
    expect(renderedComponent.find("PhotoSlider")).toHaveLength(1);
  });

  it("does not renders a photo slider when passed an invalid category", () => {
    const options = new ReactRouterEnzymeContext();
    const renderedComponent = mount(<PhotoPage match={{ params: { category: "mycat" } }} />, options.get());
    renderedComponent.setProps();
    expect(renderedComponent.find("PhotoSlider")).toHaveLength(0);
  });
});
