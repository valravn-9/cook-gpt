import React, { useState } from "react";
import { TextInput, Button, SegmentedButtons, useTheme } from "react-native-paper";
import Form from "../../components/Form";
import { Recipe, Veggie } from "../../typings/recipe";
import getChatCompletion from "../../api/openAI";

interface IProps {
  initialRecipe: Recipe;
  onCancel: () => void;
  onSave: (recipe: Recipe) => void;
}

const RecipeForm = ({ initialRecipe, onCancel, onSave }: IProps) => {
  const [recipe, setRecipe] = useState<Recipe>(initialRecipe);
  const [loading, setLoading] = useState<boolean>(false);
  const { colors } = useTheme();

  const generateRecipe = async () => {
    const veggieText = recipe?.veggie && recipe?.veggie !== Veggie.ALL ? ` ${recipe?.veggie}` : "";
    const countryText = recipe?.country ? ` from ${recipe?.country}` : "";
    const personsText = recipe?.persons ? ` for ${recipe?.persons} people` : "";
    const minutesText = recipe?.minutes ? ` that takes ${recipe?.minutes} minutes or less to be done` : "";
    const requestText = `Can you generate me a${veggieText} recipe${countryText}${personsText}${minutesText}?`;
    setLoading(true);
    const response = await getChatCompletion(requestText);
    response ? setRecipe({ ...recipe, result: response }) : void 0;
    setLoading(false);
  };

  const isValid = () => {
    return recipe.title && recipe.result;
  };

  const saveRecipe = () => {
    isValid() ? onSave(recipe) : alert("Please fill in all required fields");
  };

  return (
    <Form title={"Recipe Form"} onCancel={onCancel} onSave={saveRecipe} item={recipe}>
      <TextInput
        value={recipe.title}
        onChangeText={(text: string) => setRecipe({ ...recipe, title: text })}
        placeholder="Enter title"
        mode="outlined"
        label={"Title*"}
      />
      <TextInput
        value={recipe.country}
        onChangeText={(text: string) => setRecipe({ ...recipe, country: text })}
        placeholder="Enter country"
        mode="outlined"
        label={"Country"}
      />
      <TextInput
        value={recipe.persons}
        onChangeText={(text: string) => setRecipe({ ...recipe, persons: text })}
        placeholder="Enter persons"
        mode="outlined"
        label={"Persons"}
        keyboardType="numeric"
      />
      <TextInput
        value={recipe.minutes}
        onChangeText={(text: string) => setRecipe({ ...recipe, minutes: text })}
        placeholder="Enter minutes"
        mode="outlined"
        label={"Minutes"}
        keyboardType="numeric"
      />
      <SegmentedButtons
        value={recipe.veggie || Veggie.ALL}
        onValueChange={(value: string) => setRecipe({ ...recipe, veggie: value as Veggie })}
        buttons={[
          {
            value: Veggie.ALL,
            label: "All",
            style: { backgroundColor: recipe.veggie === Veggie.ALL || !recipe.veggie ? colors.primaryContainer : colors.background },
          },
          {
            value: Veggie.VEGETARIAN,
            label: "Vegetarian",
            style: { backgroundColor: recipe.veggie === Veggie.VEGETARIAN ? colors.primaryContainer : colors.background },
          },
          {
            value: Veggie.VEGAN,
            label: "Vegan",
            style: { backgroundColor: recipe.veggie === Veggie.VEGAN ? colors.primaryContainer : colors.background },
          },
        ]}
      />
      <Button children={"Generate Recipe"} icon={"robot"} loading={loading} onPress={generateRecipe} mode="contained" disabled={loading} />

      <TextInput
        value={recipe.result}
        onChangeText={(text: string) => setRecipe({ ...recipe, result: text })}
        placeholder="Enter Recipe content"
        mode="outlined"
        label={"Recipe content*"}
        multiline={true}
        disabled={loading}
      />
    </Form>
  );
};

export default RecipeForm;
