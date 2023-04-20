import React from "react";
import { render } from "@testing-library/react-native";
import ShoppingScreen from ".";
import themes from "../../../styles/themes";

describe("ShoppingScreen", () => {
  it("should render", () => {
    render(<ShoppingScreen theme={themes.lightTheme} />);
  });
});
