import React from "react";
import CounterButton from "./CounterButton";
import { shallow } from "enzyme";

describe("Testing stateful component", () => {
  test("expect to render CounterButton ", () => {
    const mockColor = "green";
    const wrapper = shallow(<CounterButton color={mockColor} />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  test("expect to simulate click", () => {
    const mockColor = "green";
    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('[id="button"]').simulate("click");
    wrapper.find('[id="button"]').simulate("click");
    wrapper.find('[id="button"]').simulate("keypress");
    
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual("green");
  });
});
