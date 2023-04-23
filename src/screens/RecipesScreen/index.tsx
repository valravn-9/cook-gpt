import React, { useEffect, useState } from "react";
import { Recipe } from "../../typings/recipe";
import Titlebar from "../../components/Titlebar";
import Screen from "../../components/Screen";
import { List } from "react-native-paper";

const RecipesScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(
      Array<Recipe>(100)
        .fill({ id: "1", title: "Recipe" })
        .map((r, i) => ({ id: `${i}`, title: `${r.title} ${i + 1}` }))
    );
  }, []);

  return (
    <Screen
      titlebarOptions={{ title: "Recipes", buttons: [{ icon: "plus", onPress: () => void 0 }] }}
    >
      {recipes.map((recipe: Recipe) => (
        <List.Item key={recipe.id} title={recipe.title}></List.Item>
      ))}
    </Screen>
  );
};

export default RecipesScreen;
