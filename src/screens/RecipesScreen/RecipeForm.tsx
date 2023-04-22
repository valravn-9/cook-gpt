import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import styles from "../../../styles";
import { Configuration, OpenAIApi } from "openai";

interface RecipeFormProps {
  route?: RouteProp<any>;
  navigation?: NavigationProp<any>;
  theme: any;
}

const RecipeForm = ({ route, navigation, theme }: RecipeFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [country, setCountry] = useState<string>("Germany");
  const [recipeText, setRecipeText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initialRecipe = route?.params?.recipe ? route.params.recipe : { title: title };
    setTitle(initialRecipe?.title);
  }, []);

  const generateRecipe = async () => {
    console.log("Generating recipe");
    const requestText = `Can you generate me a recipe from ${country}`;
    const apiKey = "<YOUR_API_KEY>";

    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);

    setLoading(true);
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: requestText }],
      });
      setRecipeText(`${completion.data.choices[0].message?.content}`);
    } catch (error) {
      setRecipeText(`Could not generate recipe.\n${error}`);
    }
    setLoading(false);
  };

  return (
    <View style={{ ...styles.screen, ...theme.background }}>
      <Text style={recipeFormStyles.formLabel}>Title</Text>
      <TextInput
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        style={recipeFormStyles.textBox}
        placeholder="Enter title"
      />
      <Button title="Capture Photo" onPress={() => navigation?.navigate("photo-capture")} />
      <Text style={recipeFormStyles.formLabel}>Country</Text>
      <TextInput
        value={country}
        onChangeText={(country: string) => setCountry(country)}
        style={recipeFormStyles.textBox}
        placeholder="Enter country"
      />
      <Button title="Generate Recipe" onPress={generateRecipe} />
      <Text>{loading ? "Loading..." : recipeText}</Text>
    </View>
  );
};

const recipeFormStyles = StyleSheet.create({
  formLabel: {
    fontSize: 14,
    marginLeft: 5,
  },
  textBox: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});

export default RecipeForm;
