import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import styles from "../../../styles";
import { Configuration, OpenAIApi } from "openai";
import { Text, ActivityIndicator, MD2Colors, TextInput, Button } from "react-native-paper";
import { View } from "react-native";

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
      <Text>Title</Text>
      <TextInput
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        placeholder="Enter title"
        mode="outlined"
      />
      <Button children={"Capture Photo"} onPress={() => navigation?.navigate("photo-capture")} />
      <Text>Country</Text>
      <TextInput
        value={country}
        onChangeText={(country: string) => setCountry(country)}
        placeholder="Enter country"
        mode="outlined"
      />
      <Button children={"Generate Recipe"} onPress={generateRecipe} />
      {loading ? (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      ) : (
        <Text>{recipeText}</Text>
      )}
    </View>
  );
};

export default RecipeForm;
