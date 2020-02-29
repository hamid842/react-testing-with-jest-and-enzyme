import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr , checkProps } from "./../../../Utils/index";
import Headline from "./index";


const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {

  describe('Cecking PropTypes' , ()=>{
    it('Should not throw a warning' , ()=>{
      const expectedProps = {
        header:'Test Header',
        desc:'Test desc',
        tempArr:[{
          firstName:'Test first name',
          lastName:'Test last name',
          email:'t@t.com',
          age:37,
          onlineStatus:false
        }]
      }
      const propsErr = checkProps(Headline,expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test desc"
      };
      wrapper = setUp(props);
    });
    it("Should render without error", () => {
      const component = findByTestAttr(wrapper, "headline");
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "headline");
      expect(component.length).toBe(0);
    });
  });
});
