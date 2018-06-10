import React from "react";
import { shallow } from "enzyme";
import SocialLink from "./index";

describe("<SocialLink />", () => {
  it("renders passed categories", () => {
    const renderedComponent = shallow(<SocialLink link="https://github.com" name="GitHub" />);
    const link = renderedComponent.find(".Social__link.Social__link--github");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("https://github.com");
  });
});
