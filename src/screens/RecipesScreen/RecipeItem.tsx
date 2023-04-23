import React from "react";

import { List, Card, Divider } from "react-native-paper";
import { Recipe } from "../../typings/recipe";

interface IProps {
  recipe: Recipe;
}

const RecipeItem = ({ recipe }: IProps) => {
  return (
    <Card.Content>
      <List.Item title={recipe.title} />
      <Divider />
    </Card.Content>
  );
};

export default RecipeItem;
