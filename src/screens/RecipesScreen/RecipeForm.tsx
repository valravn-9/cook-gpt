import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

interface RecipeFormProps {
  route?: RouteProp<any>;
  navigation?: NavigationProp<any>;
}

const RecipeForm = ({ route, navigation }: RecipeFormProps) => {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const initialRecipe = route?.params?.recipe ? route.params.recipe : { title: title };
    setTitle(initialRecipe?.title);
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.formLabel}>Title</Text>
      <TextInput
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        style={styles.textBox}
        placeholder="Enter title"
      />
      <Button title="Capture Photo" onPress={() => navigation?.navigate("PhotoCapture")} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    padding: 10,
    backgroundColor: "white",
  },
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
