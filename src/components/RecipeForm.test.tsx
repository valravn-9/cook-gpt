import { render, screen, fireEvent } from "@testing-library/react-native";
import RecipeForm from "./RecipeForm";

test("renders all components", async () => {
  render(<RecipeForm />);
  const titleLabel = screen.getByText("Title");
  const titleInput = screen.getByPlaceholderText("Enter title");
  expect(titleLabel).toBeDefined();
  expect(titleInput).toBeDefined();
});

test("changes the title", async () => {
  render(<RecipeForm />);
  const titleInput = screen.getByPlaceholderText("Enter title");
  const newTitle = "New Title";
  fireEvent.changeText(titleInput, newTitle);
  expect(titleInput.props.value).toBe(newTitle);
});
