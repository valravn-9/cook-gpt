import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import {
  ActivityIndicator,
  TextInput,
  Button,
  Text,
  Snackbar,
  MD2Colors,
  useTheme,
} from "react-native-paper";
import { ScrollView, View } from "react-native";

interface IProps {
  route?: RouteProp<any>;
}

const RecipeForm = ({ route }: IProps) => {
  const { colors } = useTheme();
  const [title, setTitle] = useState<string>("New Recipe");
  const [country, setCountry] = useState<string>("Germany");
  const [recipeText, setRecipeText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);

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
      setSnackbarVisible(true);
    }
    setLoading(false);
  };

  return (
    <View style={{ gap: 10, backgroundColor: colors.background }}>
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
      <Button children={"Generate Recipe"} icon="robot" onPress={generateRecipe} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        {loading ? <ActivityIndicator animating={true} size="large" /> : <Text>{recipeText}</Text>}
      </ScrollView>
      <Snackbar
        children={"Could not generate recipe"}
        visible={snackbarVisible}
        duration={3000}
        onDismiss={() => setSnackbarVisible(false)}
        icon="close"
        onIconPress={() => setSnackbarVisible(false)}
        style={{ backgroundColor: MD2Colors.red500 }}
      />
    </View>
  );
};

export default RecipeForm;
