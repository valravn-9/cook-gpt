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
        {recipe?.title ? <Text>{recipe.title}</Text> : void 0}
        {recipe?.country ? <Text>from {recipe.country}</Text> : void 0}
        {recipe?.persons ? <Text>for {recipe.persons} persons</Text> : void 0}
        {recipe?.minutes ? <Text>done in less than {recipe.minutes} minutes</Text> : void 0}
        <Divider style={{}} />
        {recipe?.result ? <Text>{recipe.result}</Text> : void 0}
      </View>
    </Form>
  );
};

export default RecipeDetails;
