import React from "react";

import { List, Card, Divider, IconButton, useTheme } from "react-native-paper";
import { Recipe } from "../../typings/recipe";
import { View } from "react-native";

interface IProps {
  recipe: Recipe;
  onPress: () => void;
  onDelete: () => void;
}

const RecipeItem = ({ recipe, onPress, onDelete }: IProps) => {
  const { colors } = useTheme();
  return (
    <Card.Content>
      <View style={{ flexDirection: "row" }}>
        <List.Item style={{ flex: 1 }} title={recipe.title} onPress={onPress} left={(props) => <List.Icon {...props} icon={"file-document"} />} />
        <IconButton icon={"delete"} onPress={onDelete} iconColor={colors.primary} />
      </View>
      <Divider />
    </Card.Content>
  );
};

export default RecipeItem;
