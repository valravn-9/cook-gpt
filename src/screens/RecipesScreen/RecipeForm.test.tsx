import { render } from "@testing-library/react-native";
import RecipeForm from "./RecipeForm";

describe("RecipeForm", () => {
  it("renders all components", async () => {
    render(
      <RecipeForm
        initialRecipe={{ title: "", result: "", country: "" }}
        visible={true}
        onCancel={jest.fn()}
        onSave={jest.fn()}
      />
    );
  });
});
