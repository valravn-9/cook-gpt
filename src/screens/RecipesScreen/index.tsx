import React, { useState } from "react";
import { Recipe } from "../../typings/recipe";
import Screen from "../../components/Screen";
import RecipeItem from "./RecipeItem";
import { MD2Colors, Snackbar } from "react-native-paper";
import { View } from "react-native";
import RecipeForm from "./RecipeForm";
import RecipeDetails from "./RecipeDetails";

const RecipesScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [showRecipeForm, setShowRecipeForm] = useState<boolean>(false);
  const [showRecipeDetails, setShowRecipeDetails] = useState<boolean>(false);

  const saveRecipe = (newRecipe: Recipe) => {
    newRecipe.id = newRecipe.id ? newRecipe.id : `${recipes.length + 1}`;
    newRecipe.title = newRecipe.title ? newRecipe.title : `Recipe ${recipes.length + 1}`;
    setRecipes([...recipes, newRecipe]);
    setShowSnackbar(true);
    setShowRecipeForm(false);
  };

  return (
    <View>
      <Screen
        titleBarOptions={{
          title: "Recipes",
          buttons: [{ icon: "plus", onPress: () => setShowRecipeForm(true) }],
        }}
      >
        {recipes.map((recipe: Recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} onPress={() => setShowRecipeDetails(true)} />
        ))}
      </Screen>
      <RecipeForm
        visible={showRecipeForm}
        onCancel={() => setShowRecipeForm(false)}
        onSave={saveRecipe}
        initialRecipe={{ title: `Recipe ${recipes.length + 1}`, country: "", persons: "", minutes: "", result: "" }}
      />
      <RecipeDetails recipe={recipes[0]} visible={showRecipeDetails} onClose={() => setShowRecipeDetails(false)} />
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
