import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import RecipesScreen from "./src/screens/RecipesScreen";
import ShoppingScreen from "./src/screens/ShoppingScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeForm from "./src/components/RecipeForm";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function RecipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recipes"
        component={RecipesScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button title="New" onPress={() => navigation.navigate("RecipeForm")} />
          ),
        })}
      />
      <Stack.Screen
        name="RecipeForm"
        component={RecipeForm}
        options={({ navigation }) => ({
          headerRight: () => <Button title="Save" onPress={() => navigation.navigate("Recipes")} />,
        })}
      />
    </Stack.Navigator>
  );
}

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
              case "Profile":
                return <MaterialCommunityIcons name="account" size={size} color={color} />;
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
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
