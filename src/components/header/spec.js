import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header component", () => {
  it("It should be render without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".headerComponent");
    expect(wrapper).tobe(1);
  });
});
