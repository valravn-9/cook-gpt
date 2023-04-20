import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from ".";
import themes from "../../../styles/themes";

describe("HomeScreen", () => {
  it("should render", () => {
    render(<HomeScreen theme={themes.lightTheme} />);
  });
});
