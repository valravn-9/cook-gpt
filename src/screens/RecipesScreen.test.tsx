import React from "react";
import { render } from "@testing-library/react-native";
import RecipesScreen from "./RecipesScreen";

describe("RecipesScreen", () => {
  it("should render", () => {
    const { getByText } = render(<RecipesScreen />);
    expect(getByText("Recipe 1")).toBeDefined;
    expect(getByText("Recipe 2")).toBeDefined;
    expect(getByText("Recipe 3")).toBeDefined;
  });
});
