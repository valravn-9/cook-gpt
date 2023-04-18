import React from "react";
import { render } from "@testing-library/react-native";
import CameraScreen from "./CameraScreen";

describe("CameraScreen", () => {
  it("should render", () => {
    render(<CameraScreen />);
  });
});
