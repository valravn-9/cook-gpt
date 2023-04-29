import React, { useState } from "react";
import { Recipe } from "../../typings/recipe";
import Screen from "../../components/Screen";
import RecipeItem from "./RecipeItem";
import { Button, Dialog, MD2Colors, Snackbar, Text } from "react-native-paper";
import { View } from "react-native";
import RecipeForm from "./RecipeForm";
import RecipeDetails from "./RecipeDetails";
import useLocalStorage from "../../hooks/useLocalStorage";

const RecipesScreen = () => {
  const [recipes, setRecipes] = useLocalStorage("recipes", [] as Recipe[]);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [showRecipeForm, setShowRecipeForm] = useState<boolean>(false);
  const [showRecipeDetails, setShowRecipeDetails] = useState<boolean>(false);
  const [showDeleteRecipeDialog, setShowDeleteRecipeDialog] = useState<boolean>(false);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>();

  const getInitialRecipe = (): Recipe => {
    return { id: recipes.length + 1, title: "", result: "" };
  };

  const saveRecipe = (newRecipe: Recipe) => {
    const index = recipes.findIndex((r) => r.id === newRecipe.id);
    if (index > -1) {
      recipes[index] = newRecipe;
    } else {
      recipes.push(newRecipe);
    }
    setRecipes(recipes);
    setShowSnackbar(true);
    resetStates();
  };

  const resetStates = () => {
    setShowRecipeForm(false);
    setShowRecipeDetails(false);
    setShowDeleteRecipeDialog(false);
    setCurrentRecipe(undefined);
  };

  const openRecipeForm = (recipe: Recipe) => {
    setCurrentRecipe(recipe);
    setShowRecipeForm(true);
  };

  const openRecipeDetails = (recipe: Recipe) => {
    setCurrentRecipe(recipe);
    setShowRecipeDetails(true);
  };

  const openDeleteRecipeDialog = (recipe: Recipe) => {
    setCurrentRecipe(recipe);
    setShowDeleteRecipeDialog(true);
  };

  const deleteRecipe = (recipe: Recipe) => {
    setRecipes(recipes.filter((r) => r.id !== recipe.id));
    resetStates();
  };

  return (
    <View>
      <Screen
        titleBarOptions={{
          title: "Recipes",
          buttons: [{ icon: "plus", onPress: () => openRecipeForm(getInitialRecipe()) }],
        }}
      >
        {recipes.map((recipe: Recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onPress={() => openRecipeDetails(recipe)}
            onEdit={() => openRecipeForm(recipe)}
            onDelete={() => openDeleteRecipeDialog(recipe)}
          />
        ))}
      </Screen>
      {currentRecipe && showRecipeForm ? <RecipeForm onCancel={() => resetStates()} onSave={saveRecipe} initialRecipe={currentRecipe} /> : void 0}
      {currentRecipe && showRecipeDetails ? <RecipeDetails recipe={currentRecipe} onClose={() => resetStates()} /> : void 0}
      {currentRecipe ? (
        <Dialog visible={showDeleteRecipeDialog}>
          <Dialog.Title>Delete Recipe</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure you want to delete the Recipe "{currentRecipe.title}"?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={resetStates}>Cancel</Button>
            <Button onPress={() => deleteRecipe(currentRecipe)}>Delete</Button>
          </Dialog.Actions>
        </Dialog>
      ) : (
        void 0
      )}
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
