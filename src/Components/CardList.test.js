import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";

test("expect to render CardList component", () => {
  const mockVillagers = [
    {
      key: 1,
      id: 1,
      name: { "name-EUen": "Jester" },
      "catch-phrase": "Micki-Mock",
    },
  ];
  expect(
    shallow(<CardList villagers={mockVillagers} />).debug()
  ).toMatchSnapshot();
});
