import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../../../styles";
import { Recipe } from "../../typings/recipe";
import { AppScreen } from "../../typings/app";

interface RecipesScreenProps {
  navigation?: NavigationProp<any>;
  theme: any;
}

const RecipesScreen = ({ navigation, theme }: RecipesScreenProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(
      Array<Recipe>(100)
        .fill({id: '1', title: 'recipe'})
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
            <TouchableOpacity onPress={() => navigation?.navigate(AppScreen.RECIPE_FORM, { recipe: item })}>
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
