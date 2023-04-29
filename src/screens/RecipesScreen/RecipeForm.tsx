import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { ActivityIndicator, TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import Form from "../../components/Form";
import { Recipe } from "../../typings/recipe";

interface IProps {
  initialRecipe: Recipe;
  onCancel: () => void;
  onSave: (recipe: Recipe) => void;
}

const RecipeForm = ({ initialRecipe, onCancel, onSave }: IProps) => {
  const [recipe, setRecipe] = useState<Recipe>(initialRecipe);
  const [loading, setLoading] = useState<boolean>(false);

  const generateRecipe = async () => {
    const apiKey = "<Your API Key>";
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openAI = new OpenAIApi(configuration);
    const countryText = recipe?.country ? ` from ${recipe?.country}` : "";
    const personsText = recipe?.persons ? ` for ${recipe?.persons} people` : "";
    const minutesText = recipe?.minutes ? ` that takes ${recipe?.minutes} minutes or less to be done` : "";
    const requestText = `Can you generate me a recipe${countryText}${personsText}${minutesText}?`;
    setLoading(true);
    try {
      const response = await openAI.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: requestText }],
      });
      setRecipe({ ...recipe, result: `${response.data.choices[0].message?.content}` });
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

  return (
    <Form title={"Recipe Form"} onCancel={onCancel} onSave={() => onSave(recipe)} item={recipe}>
      <View style={{ gap: 10 }}>
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
        <Button children={"Generate Recipe"} icon="robot" onPress={generateRecipe} mode="contained" />

        {loading ? (
          <ActivityIndicator animating={true} size="large" />
        ) : (
          <TextInput
            value={recipe.result}
            onChangeText={(text: string) => setRecipe({ ...recipe, result: text })}
            placeholder="Enter Recipe content"
            mode="outlined"
            label={"Recipe content"}
            multiline={true}
            disabled={true}
          />
        )}
      </View>
    </Form>
  );
};

export default RecipeForm;
