import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render textbox", () => {
    expect(NumberOfEventsWrapper.find("#num-events")).toHaveLength(1);
  });

  test("display number 25 by default", () => {
    expect(
      NumberOfEventsWrapper.find("#num-events").get(0).props.value
    ).toEqual(25);
  });

  test("user can change the number of events", () => {
    NumberOfEventsWrapper.find("#num-events").simulate("change", {
      target: { value: 10 },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(10);
  });

  test("only allow number above 1 of events > 0", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 25 });
    NumberOfEventsWrapper.find("#num-events").simulate("change", {
      target: { value: -1 },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(25);
  });

  test("only allow number", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 25 });
    NumberOfEventsWrapper.find("#num-events").simulate("change", {
      target: { value: "string" },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(25);
  });
});
