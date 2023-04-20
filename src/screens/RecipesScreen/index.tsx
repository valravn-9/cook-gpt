import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import styles from "../../../styles";

interface RecipesScreenProps {
  navigation?: NavigationProp<any>;
  theme: any;
}

const RecipesScreen = ({ navigation, theme }: RecipesScreenProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(
      Array(100)
        .fill("Recipe")
        .map((r, i) => ({ id: `${i}`, title: `${r} ${i + 1}` }))
    );
  }, []);

  return (
    <View style={{ ...styles.screen, ...theme.background }}>
      <FlatList
        data={recipes}
        keyExtractor={(recipe: Recipe) => recipe.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation?.navigate("recipe-form", { recipe: item })}>
              <Text style={{ ...styles.listEntry, ...theme.background, ...theme.text }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RecipesScreen;
