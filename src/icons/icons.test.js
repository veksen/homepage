import React from "react";
import { shallow } from "enzyme";
import Arrow from "./Arrow";
import Burger from "./Burger";
import Cross from "./Cross";

describe("<Icons />", () => {
  it("renders Arrow", () => {
    const renderedComponent = shallow(<Arrow />);
    expect(renderedComponent.type()).toBe("svg");
  });

  it("renders Arrow style - without right direction", () => {
    const renderedComponent = shallow(<Arrow direction="right" />);
    expect(renderedComponent.props().style).toEqual({});
  });

  it("renders Arrow style - with left direction", () => {
    const renderedComponent = shallow(<Arrow direction="left" />);
    expect(renderedComponent.props().style).toEqual({ transform: "scaleX(-1)" });
  });

  it("uses the same svg for left and right", () => {
    const left = shallow(<Arrow direction="left" />);
    const right = shallow(<Arrow direction="right" />);
    expect(left.find("path")).toEqual(right.find("path"));
  });

  it("uses the same svg for up and down", () => {
    const up = shallow(<Arrow direction="up" />);
    const down = shallow(<Arrow direction="down" />);
    expect(up.find("path")).toEqual(down.find("path"));
  });

  it("uses different svg for up and left", () => {
    const up = shallow(<Arrow direction="up" />);
    const left = shallow(<Arrow direction="left" />);
    expect(up.find("path")).not.toEqual(left.find("path"));
  });

  it("renders Burger", () => {
    const renderedComponent = shallow(<Burger />);
    expect(renderedComponent.type()).toBe("svg");
  });

  it("renders Cross", () => {
    const renderedComponent = shallow(<Cross />);
    expect(renderedComponent.type()).toBe("svg");
  });
});
