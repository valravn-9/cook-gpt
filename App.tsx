import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RecipesScreen from "./src/screens/RecipesScreen";
import RecipeForm from "./src/screens/RecipesScreen/RecipeForm";
import SettingsScreen from "./src/screens/Settings";
import ShoppingScreen from "./src/screens/Shopping";
import PhotoCapture from "./src/screens/RecipesScreen/PhotoCapture";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="recipes-list"
        component={RecipesScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button title="New" onPress={() => navigation.navigate("recipe-form")} />
          ),
          title: "Recipes",
        })}
      />
      <Stack.Screen
        name="recipe-form"
        component={RecipeForm}
        options={({ navigation }) => ({
          headerRight: () => <Button title="Save" onPress={() => navigation.navigate("recipes")} />,
          title: "Recipe Form",
        })}
      />
      <Stack.Screen
        name="photo-capture"
        component={PhotoCapture}
        options={() => ({ title: "Photo Capture" })}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            switch (route.name) {
              case "home":
                return <MaterialCommunityIcons name="home" size={size} color={color} />;
              case "recipes":
                return <MaterialCommunityIcons name="book-open" size={size} color={color} />;
              case "shopping":
                return <MaterialCommunityIcons name="cart" size={size} color={color} />;
              case "settings":
                return <MaterialCommunityIcons name="cog" size={size} color={color} />;
              default:
                return <MaterialCommunityIcons name="home" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "#3b5998",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="home" component={HomeScreen} options={() => ({ title: "Home" })} />
        <Tab.Screen
          name="recipes"
          component={RecipeStack}
          options={{ headerShown: false, title: "Recipes" }}
        />
        <Tab.Screen
          name="shopping"
          component={ShoppingScreen}
          options={() => ({ title: "Shopping" })}
        />
        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={() => ({ title: "Settings" })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
