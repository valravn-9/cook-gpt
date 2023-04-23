import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import RecipesScreen from ".";

describe("RecipesScreen", () => {
  it("should render", () => {
    const { getByText } = render(<RecipesScreen />);
    expect(getByText("Recipe 1")).toBeDefined;
    expect(getByText("Recipe 2")).toBeDefined;
    expect(getByText("Recipe 3")).toBeDefined;
  });
  it("should navigate to recipe form screen", () => {
    const navigation: any = { navigate: jest.fn() };
    const { getByText } = render(<RecipesScreen />);
    const recipeEntry = getByText("Recipe 1");
    fireEvent.press(recipeEntry);
    expect(navigation.navigate).toHaveBeenCalledWith("recipe-form", {
      recipe: { id: "0", title: "Recipe 1" },
    });
  });
});
