import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./../../../Utils/index";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it(" should be render without errors", () => {
    const wrapper = findByTestAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });
});
