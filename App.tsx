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
        name="Recipes List"
        component={RecipesScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button title="New" onPress={() => navigation.navigate("Recipe Form")} />
          ),
        })}
      />
      <Stack.Screen
        name="Recipe Form"
        component={RecipeForm}
        options={({ navigation }) => ({
          headerRight: () => <Button title="Save" onPress={() => navigation.navigate("Recipes")} />,
        })}
      />
      <Stack.Screen name="PhotoCapture" component={PhotoCapture} />
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
              case "Home":
                return <MaterialCommunityIcons name="home" size={size} color={color} />;
              case "Recipes":
                return <MaterialCommunityIcons name="book-open" size={size} color={color} />;
              case "Shopping":
                return <MaterialCommunityIcons name="cart" size={size} color={color} />;
              case "Settings":
                return <MaterialCommunityIcons name="account-settings" size={size} color={color} />;
              default:
                return <MaterialCommunityIcons name="home" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "#3b5998",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Recipes" component={RecipeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Shopping" component={ShoppingScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
