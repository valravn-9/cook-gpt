import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";
import SettingsScreen from ".";

describe("SettingsScreen", () => {
  it("should render", () => {
    render(<SettingsScreen />);
  });
  it("should switch theme", () => {
    const switchTheme = jest.fn();
    const { getByText } = render(<SettingsScreen switchTheme={switchTheme} />);
    fireEvent.press(getByText("⚙️"));
    expect(switchTheme).toHaveBeenCalled();
  });
});
