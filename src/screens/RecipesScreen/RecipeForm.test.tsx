import { render } from "@testing-library/react-native";
import RecipeForm from "./RecipeForm";

describe("RecipeForm", () => {
  it("renders all components", async () => {
    render(<RecipeForm />);
  });
});
