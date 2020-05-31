import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

test("expect to render Card component", () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
});
