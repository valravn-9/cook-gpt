import React from "react";
import { render } from "@testing-library/react-native";
import SettingsScreen from ".";
import LightTheme from "../../themes/light";

describe("SettingsScreen", () => {
  it("should render", () => {
    render(<SettingsScreen theme={LightTheme} switchTheme={jest.fn()} />);
  });
});
