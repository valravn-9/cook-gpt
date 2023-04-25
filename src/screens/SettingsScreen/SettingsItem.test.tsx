import React from "react";
import { render } from "@testing-library/react-native";
import SettingsItem from ".";
import LightTheme from "../../themes/light";

describe("SettingsItem", () => {
  it("should render", () => {
    render(<SettingsItem theme={LightTheme} switchTheme={jest.fn()} />);
  });
});
