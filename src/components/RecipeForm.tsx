import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const RecipeForm = () => {
  const [title, setTitle] = useState<string>("");

  return (
    <View>
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
  formLabel: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  textBox: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});

export default RecipeForm;
