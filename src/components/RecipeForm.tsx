import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const RecipeForm = () => {
  const [title, setTitle] = useState<string>("");

  return (
    <View style={styles.screen}>
      <Text style={styles.formLabel}>Title</Text>
      <TextInput
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        style={styles.textBox}
      />
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
