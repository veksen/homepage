import React from "react";
import { mount, shallow } from "enzyme";
import PhotoSlider from "./index";

const photos = [
  {
    filename: "VXN_0673.jpg",
    category: "sports",
    settings: {
      focalLength: "70mm",
      apertureSpeed: "1/500s",
      apertureLength: "f/2.8",
      iso: "320",
      lens: "Nikkor 70-200 2.8 VRII"
    }
  },
  {
    filename: "VXN_1515.jpg",
    category: "sports",
    settings: {
      focalLength: "48mm",
      apertureSpeed: "1/60s",
      apertureLength: "f/7.1",
      iso: "64",
      lens: "Nikkor 24-70 2.8E"
    }
  },
  {
    filename: "VXN_1815.jpg",
    category: "sports",
    settings: {
      focalLength: "24mm",
      apertureSpeed: "1/640s",
      apertureLength: "f/4",
      iso: "100",
      lens: "Nikkor 24-70 2.8E"
    }
  },
  {
    filename: "DSC_6366.jpg",
    category: "sports",
    settings: {
      focalLength: "165mm",
      apertureSpeed: "1/1600s",
      apertureLength: "f/2.8",
      iso: "200",
      lens: "Nikkor 70-200 2.8 VRII"
    }
  },
  {
    filename: "DSC_4976.jpg",
    category: "sports",
    settings: {
      focalLength: "70mm",
      apertureSpeed: "1/30s",
      apertureLength: "f/14",
      iso: "80",
      lens: "Nikkor 70-200 2.8 VRII"
    }
  }
];

describe("<PhotoSlider />", () => {
  it("renders", () => {
    const renderedComponent = shallow(<PhotoSlider photos={photos} />);
    expect(renderedComponent.type()).toBe("div");
  });

  it("goes to next photo on clicking the right arrow", () => {
    const renderedComponent = shallow(<PhotoSlider photos={photos} />);
    expect(renderedComponent.state().currentIndex).toBe(0);
    renderedComponent.find(".PhotoSlider__next").simulate("click");
    expect(renderedComponent.state().currentIndex).toBe(1);
  });

  it("updates count on going to the next photo", () => {
    const renderedComponent = shallow(<PhotoSlider photos={photos} />);
    expect(renderedComponent.find(".PhotoSlider__count").text()).toBe("1 / 5");
    renderedComponent.find(".PhotoSlider__next").simulate("click");
    expect(renderedComponent.find(".PhotoSlider__count").text()).toBe("2 / 5");
  });

  it("goes to previous photo on clicking the left arrow", () => {
    const renderedComponent = shallow(<PhotoSlider photos={photos} />);
    expect(renderedComponent.state().currentIndex).toBe(0);
    renderedComponent.find(".PhotoSlider__next").simulate("click");
    expect(renderedComponent.state().currentIndex).toBe(1);
    renderedComponent.find(".PhotoSlider__next").simulate("click");
    expect(renderedComponent.state().currentIndex).toBe(2);
    renderedComponent.find(".PhotoSlider__next").simulate("click");
    expect(renderedComponent.state().currentIndex).toBe(3);
    renderedComponent.find(".PhotoSlider__previous").simulate("click");
    expect(renderedComponent.state().currentIndex).toBe(2);
  });

  it("updates count on going to the previous photo", () => {
    const renderedComponent = shallow(<PhotoSlider photos={photos} />);
    expect(renderedComponent.find(".PhotoSlider__count").text()).toBe("1 / 5");
    renderedComponent.find(".PhotoSlider__next").simulate("click");
    expect(renderedComponent.find(".PhotoSlider__count").text()).toBe("2 / 5");
    renderedComponent.find(".PhotoSlider__next").simulate("click");
    expect(renderedComponent.find(".PhotoSlider__count").text()).toBe("3 / 5");
    renderedComponent.find(".PhotoSlider__previous").simulate("click");
    expect(renderedComponent.find(".PhotoSlider__count").text()).toBe("2 / 5");
  });

  it("toggles settings on pressing the toggle settings button", () => {
    const renderedComponent = shallow(<PhotoSlider photos={photos} />);
    expect(renderedComponent.state().showSettings).toBe(false);
    renderedComponent.find(".PhotoSlider__toggle-settings").simulate("click");
    expect(renderedComponent.state().showSettings).toBe(true);

    // then again to hide
    renderedComponent.find(".PhotoSlider__toggle-settings").simulate("click");
    expect(renderedComponent.state().showSettings).toBe(false);
  });

  // WIP: doesn't seem to want to check calls to the event listener, but state updates fine
  it("moves between photos on pressing left and right arrows", () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const renderedComponent = mount(<PhotoSlider photos={photos} />);
    // expect(document.addEventListener).toHaveBeenCalledTimes(0);
    expect(renderedComponent.state().currentIndex).toBe(0);
    map.keydown({ code: "ArrowRight" });
    // expect(document.addEventListener).toHaveBeenCalledTimes(1);
    // expect(document.addEventListener).toHaveBeenCalledWith({ code: "ArrowRight" });
    expect(renderedComponent.state().currentIndex).toBe(1);
    map.keydown({ code: "ArrowRight" });
    // expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(renderedComponent.state().currentIndex).toBe(2);
    map.keydown({ code: "ArrowLeft" });
    // expect(document.addEventListener).toHaveBeenCalledTimes(3)
    expect(renderedComponent.state().currentIndex).toBe(1);
  });

  // TODO: test event listener like above?
  it("toggles settings on pressing up and down arrows", () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const renderedComponent = mount(<PhotoSlider photos={photos} />);
    expect(renderedComponent.state().showSettings).toBe(false);
    map.keydown({ code: "ArrowUp" });
    expect(renderedComponent.state().showSettings).toBe(true);
    map.keydown({ code: "ArrowDown" });
    expect(renderedComponent.state().showSettings).toBe(false);
  });
});
