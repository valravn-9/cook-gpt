import React from "react";

import { List, Card, Divider, IconButton, useTheme } from "react-native-paper";
import { Recipe, Veggie } from "../../typings/recipe";
import { View } from "react-native";

interface IProps {
  recipe: Recipe;
  onPress: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const RecipeItem = ({ recipe, onPress, onEdit, onDelete }: IProps) => {
  const { colors } = useTheme();
  return (
    <Card.Content>
      <View style={{ flexDirection: "row" }}>
        <List.Item
          style={{ flex: 1 }}
          title={recipe.title}
          onPress={onPress}
          left={(props) => (
            <List.Icon
              {...props}
              icon={recipe.veggie === Veggie.VEGAN ? "leaf-circle-outline" : recipe.veggie === Veggie.VEGETARIAN ? "leaf-circle" : "food-turkey"}
            />
          )}
        />
        <IconButton icon={"pencil"} onPress={onEdit} iconColor={colors.primary} />
        <IconButton icon={"delete"} onPress={onDelete} iconColor={colors.primary} />
      </View>
      <Divider />
    </Card.Content>
  );
};

export default RecipeItem;
