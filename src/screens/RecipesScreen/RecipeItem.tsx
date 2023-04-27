import React from "react";

import { List, Card, Divider } from "react-native-paper";
import { Recipe } from "../../typings/recipe";

interface IProps {
  recipe: Recipe;
  onPress: () => void;
}

const RecipeItem = ({ recipe, onPress }: IProps) => {
  return (
    <Card.Content>
      <List.Item title={recipe.title} onPress={onPress} />
      <Divider />
    </Card.Content>
  );
};

export default RecipeItem;
