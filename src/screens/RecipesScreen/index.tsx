import React, { useEffect, useState } from "react";
import { Recipe } from "../../typings/recipe";
import Screen from "../../components/Screen";
import RecipeItem from "./RecipeItem";

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
      TitleBarOptions={{ title: "Recipes", buttons: [{ icon: "plus", onPress: () => void 0 }] }}
    >
      {recipes.map((recipe: Recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </Screen>
  );
};

export default RecipesScreen;
