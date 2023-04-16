import React from "react";
import { render } from "@testing-library/react-native";
import ProfileScreen from "./ProfileScreen";

describe("ProfileScreen", () => {
  it("should render", () => {
    render(<ProfileScreen />);
  });
});
