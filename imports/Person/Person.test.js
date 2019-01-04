import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { Person } from "./Person";

configure({ adapter: new Adapter() });

describe("Person", () => {
  describe("view model", () => {
    let person;
    beforeEach(() => {
      person = new Person();
    });

    describe("name", () => {
      it("defaults to ''", () => {
        expect(person.name()).toBe("");
      });
    });
  });

  describe("bindings", () => {
    const rendered = shallow(<Person />);

    it("binds input", () => {
      const elements = rendered.find('input[data-bind="value: name"]');
      expect(elements.length).toBe(1);
    });

    it("binds label", () => {
      const elements = rendered.find(
        "label[data-bind=\"text: 'Hello ' + name\"]"
      );
      expect(elements.length).toBe(1);
    });
  });
});
