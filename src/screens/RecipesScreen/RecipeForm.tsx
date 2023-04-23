import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { ActivityIndicator, TextInput, Button, Text } from "react-native-paper";
import { ScrollView, View } from "react-native";
import Form from "../../components/Form";
import { Recipe } from "../../typings/recipe";

interface IProps {
  initialRecipe: Recipe;
  visible: boolean;
  onCancel: () => void;
  onSave: (recipe: Recipe) => void;
}

const RecipeForm = ({ initialRecipe, visible, onCancel, onSave }: IProps) => {
  const [recipe, setRecipe] = useState<Recipe>(initialRecipe);
  const [loading, setLoading] = useState<boolean>(false);

  const generateRecipe = async () => {
    const apiKey = "<YOUR_API_KEY>";
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openAI = new OpenAIApi(configuration);
    const requestText = `Can you generate me a recipe from ${recipe?.country}`;
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
    <Form
      title={"Recipe Form"}
      visible={visible}
      onCancel={onCancel}
      onSave={() => onSave(recipe)}
      item={{}}
    >
      <View style={{ gap: 10 }}>
        <TextInput
          value={recipe.title}
          onChangeText={(text: string) => setRecipe({ ...recipe, title: text })}
          placeholder="Enter title"
          mode="outlined"
          label={"Title"}
        />
        <TextInput
          value={recipe.country}
          onChangeText={(text: string) => setRecipe({ ...recipe, country: text })}
          placeholder="Enter country"
          mode="outlined"
          label={"Country"}
        />
        <Button
          children={"Generate Recipe"}
          icon="robot"
          onPress={generateRecipe}
          mode="contained"
        />
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator animating={true} size="large" />
          ) : (
            <Text>{recipe.result}</Text>
          )}
        </ScrollView>
      </View>
    </Form>
  );
};

export default RecipeForm;
