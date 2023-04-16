import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

interface Recipe {
  title: string;
}

const RecipesScreen = () => {
  const getMockedRecipes = () => {
    const recipes: Recipe[] = [];
    for (let i = 0; i < 100; i++) {
      recipes.push({ title: `Recipe ${i + 1}` });
    }
    return recipes;
  };

  const [recipes, setRecipes] = useState<Recipe[]>(getMockedRecipes());
  return (
    <LinearGradient colors={["#fff", "#3b5998", "#000"]} style={styles.gradient}>
      <View style={styles.screen}>
        <FlatList
          data={recipes}
          keyExtractor={(recipe: Recipe) => recipe.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => alert(JSON.stringify(item))}>
                <Text style={styles.recipeEntry}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  screen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  recipeEntry: {
    fontSize: 18,
    padding: 10,
    marginBottom: 1,
    backgroundColor: "white",
  },
});

export default RecipesScreen;
