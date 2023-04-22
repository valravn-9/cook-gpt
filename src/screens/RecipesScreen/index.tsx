import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../../../styles";
import { Recipe } from "../../typings/recipe";
import { AppScreen } from "../../typings/app";
import { useTheme } from "react-native-paper";

interface RecipesScreenProps {
  navigation?: NavigationProp<any>;
}

const RecipesScreen = ({ navigation }: RecipesScreenProps) => {
  const { colors } = useTheme();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(
      Array<Recipe>(100)
        .fill({ id: "1", title: "Recipe" })
        .map((r, i) => ({ id: `${i}`, title: `${r.title} ${i + 1}` }))
    );
  }, []);

  return (
    <View style={{ ...styles.screen, backgroundColor: colors.background }}>
      <FlatList
        data={recipes}
        keyExtractor={(recipe: Recipe) => recipe.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation?.navigate(AppScreen.RECIPE_FORM, { recipe: item })}
            >
              <Text style={{ ...styles.listEntry }}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RecipesScreen;
