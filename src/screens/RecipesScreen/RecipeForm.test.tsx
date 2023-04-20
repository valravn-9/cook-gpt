import { render, fireEvent } from "@testing-library/react-native";
import RecipeForm from "./RecipeForm";
import themes from "../../../styles/themes";

describe("RecipeForm", () => {
  it("renders all components", async () => {
    const { getByText, getByPlaceholderText } = render(<RecipeForm theme={themes.lightTheme} />);
    const titleLabel = getByText("Title");
    const titleInput = getByPlaceholderText("Enter title");
    expect(titleLabel).toBeDefined();
    expect(titleInput).toBeDefined();
  });

  it("changes the title", async () => {
    const { getByPlaceholderText } = render(<RecipeForm theme={themes.lightTheme} />);
    const titleInput = getByPlaceholderText("Enter title");
    const newTitle = "init";
    fireEvent.changeText(titleInput, newTitle);
    expect(titleInput.props.value).toBe(newTitle);
  });
  it("navigates to photo capture screen", async () => {
    const navigation: any = { navigate: jest.fn() };
    const { getByText } = render(<RecipeForm theme={themes.lightTheme} navigation={navigation} />);
    const capturePhotoButton = getByText("Capture Photo");
    fireEvent.press(capturePhotoButton);
    expect(navigation.navigate).toHaveBeenCalledWith("photo-capture");
  });
});
