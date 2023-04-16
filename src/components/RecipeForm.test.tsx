import { render, screen, fireEvent } from "@testing-library/react-native";
import RecipeForm from "./RecipeForm";

describe("RecipeForm", () => {
  it("renders all components", async () => {
    const { getByText, getByPlaceholderText } = render(<RecipeForm />);
    const titleLabel = getByText("Title");
    const titleInput = getByPlaceholderText("Enter title");
    expect(titleLabel).toBeDefined();
    expect(titleInput).toBeDefined();
  });

  it("changes the title", async () => {
    const { getByPlaceholderText } = render(<RecipeForm />);
    const titleInput = getByPlaceholderText("Enter title");
    const newTitle = "New Title";
    fireEvent.changeText(titleInput, newTitle);
    expect(titleInput.props.value).toBe(newTitle);
  });
});
