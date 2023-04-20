import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";
import SettingsScreen from ".";
import themes from "../../../styles/themes";

describe("SettingsScreen", () => {
  it("should render", () => {
    render(<SettingsScreen theme={themes.lightTheme} />);
  });
  it("should switch theme", () => {
    const switchTheme = jest.fn();
    const { getByText } = render(
      <SettingsScreen theme={themes.lightTheme} switchTheme={switchTheme} />
    );
    fireEvent.press(getByText("Switch Theme"));
    expect(switchTheme).toHaveBeenCalled();
  });
});
