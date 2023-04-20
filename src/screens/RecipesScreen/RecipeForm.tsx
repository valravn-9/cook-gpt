import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import styles from "../../../styles";

interface RecipeFormProps {
  route?: RouteProp<any>;
  navigation?: NavigationProp<any>;
  theme: any;
}

const RecipeForm = ({ route, navigation, theme }: RecipeFormProps) => {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const initialRecipe = route?.params?.recipe ? route.params.recipe : { title: title };
    setTitle(initialRecipe?.title);
  }, []);

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
