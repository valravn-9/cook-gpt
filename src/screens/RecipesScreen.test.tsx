import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import RecipesScreen from "./RecipesScreen";
import { Alert } from "react-native";

describe("RecipesScreen", () => {
  it("should render", () => {
    const { getByText } = render(<RecipesScreen />);
    expect(getByText("Recipe 1")).toBeDefined;
    expect(getByText("Recipe 2")).toBeDefined;
    expect(getByText("Recipe 3")).toBeDefined;
  });
});
