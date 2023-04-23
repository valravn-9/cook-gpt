import { render } from "@testing-library/react-native";
import RecipeItem from "./RecipeItem";

describe("RecipeItem", () => {
  it("renders all components", async () => {
    render(<RecipeItem recipe={{ title: "", country: "", result: "" }} />);
  });
});
