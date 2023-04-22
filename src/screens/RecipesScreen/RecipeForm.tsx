import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import styles from "../../../styles";
import { Configuration, OpenAIApi } from "openai";
import { ActivityIndicator, MD2Colors, TextInput, Button, Text } from "react-native-paper";
import { ScrollView, View } from "react-native";

interface RecipeFormProps {
  route?: RouteProp<any>;
  navigation?: NavigationProp<any>;
}

const RecipeForm = ({ route }: RecipeFormProps) => {
  const [title, setTitle] = useState<string>("New Recipe");
  const [country, setCountry] = useState<string>("Germany");
  const [recipeText, setRecipeText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initialRecipe = route?.params?.recipe ? route.params.recipe : { title: title };
    setTitle(initialRecipe?.title);
  }, []);

  const generateRecipe = async () => {
    const apiKey = "<YOUR_API_KEY>";
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openAI = new OpenAIApi(configuration);
    const requestText = `Can you generate me a recipe from ${country}`;
    setLoading(true);
    try {
      const response = await openAI.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: requestText }],
      });
      setRecipeText(`${response.data.choices[0].message?.content}`);
    } catch (error) {
      setRecipeText(`Could not generate recipe.\n${error}`);
    }
    setLoading(false);
  };

  return (
    <View style={{ ...styles.screen, gap: 10 }}>
      <TextInput
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        placeholder="Enter title"
        mode="outlined"
        label={"Title"}
      />
      <TextInput
        value={country}
        onChangeText={(country: string) => setCountry(country)}
        placeholder="Enter country"
        mode="outlined"
        label={"Country"}
      />
      <Button
        children={"Generate Recipe"}
        onPress={generateRecipe}
        buttonColor={MD2Colors.blue900}
        textColor={MD2Colors.white}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator animating={true} color={MD2Colors.blue900} size="large" />
        ) : (
          <Text>{recipeText}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default RecipeForm;
