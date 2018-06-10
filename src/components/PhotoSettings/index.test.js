import React from "react";
import { shallow } from "enzyme";
import PhotoSettings from "./index";

describe("<PhotoSettings />", () => {
  it("renders", () => {
    const renderedComponent = shallow(
      <PhotoSettings
        settings={{
          focalLength: "70mm",
          apertureSpeed: "1/60s",
          apertureLength: "f/2.8",
          iso: "200",
          lens: "Nikkor 70-200 2.8 VRII"
        }}
      />
    );
    expect(renderedComponent.type()).toBe("div");
  });

  it("renders passed settings", () => {
    const renderedComponent = shallow(
      <PhotoSettings
        settings={{
          focalLength: "70mm",
          apertureSpeed: "1/60s",
          apertureLength: "f/2.8",
          iso: "200",
          lens: "Nikkor 70-200 2.8 VRII"
        }}
      />
    );
    expect(renderedComponent.text()).toMatch(/70mm/);
    expect(renderedComponent.text()).toMatch(/1\/60s/);
    expect(renderedComponent.text()).toMatch(/f\/2\.8/);
    expect(renderedComponent.text()).toMatch(/ISO 200/);
    expect(renderedComponent.text()).toMatch(/Nikkor 70-200 2\.8 VRII/);
  });

  it("renders as visible", () => {
    const renderedComponent = shallow(
      <PhotoSettings
        settings={{
          focalLength: "70mm",
          apertureSpeed: "1/60s",
          apertureLength: "f/2.8",
          iso: "200",
          lens: "Nikkor 70-200 2.8 VRII"
        }}
        visible
      />
    );
    // TODO: test visibility?
    expect(renderedComponent.props().className).toMatch(/visible/);
  });
});
