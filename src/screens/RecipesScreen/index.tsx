import React, { useEffect, useState } from "react";
import { Recipe } from "../../typings/recipe";
import Screen from "../../components/Screen";
import RecipeItem from "./RecipeItem";
import { MD2Colors, Snackbar } from "react-native-paper";
import { View } from "react-native";

const RecipesScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const addRecipe = () => {
    setRecipes([
      ...recipes,
      { id: `${recipes.length + 1}`, title: `Recipe ${recipes.length + 1}` },
    ]);
    setShowSnackbar(true);
  };

  return (
    <View>
      <Screen
        TitleBarOptions={{ title: "Recipes", buttons: [{ icon: "plus", onPress: addRecipe }] }}
      >
        {recipes.map((recipe: Recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </Screen>
      <Snackbar
        children={"Recipe added"}
        visible={showSnackbar}
        duration={3000}
        onDismiss={() => setShowSnackbar(false)}
        icon="close"
        onIconPress={() => setShowSnackbar(false)}
        style={{
          backgroundColor: MD2Colors.green500,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </View>
  );
};

export default RecipesScreen;
