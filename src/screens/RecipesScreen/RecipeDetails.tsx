import React from "react";
import { Divider, Text } from "react-native-paper";
import { View } from "react-native";
import Form from "../../components/Form";
import { Recipe } from "../../typings/recipe";

interface IProps {
  recipe?: Recipe;
  onClose: () => void;
}

const RecipeDetails = ({ recipe, onClose }: IProps) => {
  return (
    <Form title={recipe?.title ? recipe.title : "Recipe Details"} onCancel={onClose} item={recipe}>
      <View style={{ gap: 10 }}>
        {recipe?.country ? <Text>From {recipe.country}</Text> : void 0}
        {recipe?.persons ? <Text>{recipe.persons} persons</Text> : void 0}
        {recipe?.minutes ? <Text>{recipe.minutes} minutes</Text> : void 0}
        <Divider />
        {recipe?.result ? <Text>{recipe.result}</Text> : void 0}
      </View>
    </Form>
  );
};

export default RecipeDetails;
