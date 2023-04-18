import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

interface RecipesScreenProps {
  navigation: NavigationProp<any>;
}

const RecipesScreen = ({ navigation }: RecipesScreenProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(
      Array(100)
        .fill("Recipe")
        .map((r, i) => ({ id: `${i}`, title: `${r} ${i + 1}` }))
    );
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={recipes}
        keyExtractor={(recipe: Recipe) => recipe.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("recipe-form", { recipe: item })}>
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
