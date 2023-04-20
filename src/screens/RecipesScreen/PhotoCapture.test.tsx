import React from "react";
import { render } from "@testing-library/react-native";
import PhotoCapture from "./PhotoCapture";
import themes from "../../../styles/themes";

describe("PhotoCapture", () => {
  it("should render", () => {
    render(<PhotoCapture theme={themes.lightTheme} />);
  });
  it("should render no access to camera hint", () => {
    const { getByText } = render(<PhotoCapture theme={themes.lightTheme} />);
    expect(getByText("No access to camera")).toBeDefined;
  });
});
