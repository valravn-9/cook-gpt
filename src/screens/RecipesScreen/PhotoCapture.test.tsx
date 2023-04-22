import React from "react";
import { render } from "@testing-library/react-native";
import PhotoCapture from "./PhotoCapture";

describe("PhotoCapture", () => {
  it("should render", () => {
    render(<PhotoCapture />);
  });
  it("should render no access to camera hint", () => {
    const { getByText } = render(<PhotoCapture />);
    expect(getByText("No access to camera")).toBeDefined;
  });
});
