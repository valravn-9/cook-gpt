import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const RecipesScreen = ({ navigation }: any) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const recipes: Recipe[] = [];
    for (let i = 0; i < 100; i++) {
      recipes.push({ id: `${i}`, title: `Recipe ${i + 1}` });
    }
    setRecipes(recipes);
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={recipes}
        keyExtractor={(recipe: Recipe) => recipe.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Recipe Form", { recipe: item })}>
              <Text style={styles.recipeEntry}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
