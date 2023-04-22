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
import useThemes from "./hooks/useThemes";
import "react-native-url-polyfill/auto";
import { AppScreen } from "./src/typings/app";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RecipeStack = ({ theme }: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.background.backgroundColor },
        headerTintColor: theme.text.color,
      }}
    >
      <Stack.Screen
        name={AppScreen.RECIPES}
        children={({ navigation }) => <RecipesScreen theme={theme} navigation={navigation} />}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button title="New" onPress={() => navigation.navigate(AppScreen.RECIPE_FORM)} />
          ),
          title: "Recipes",
        })}
      />
      <Stack.Screen
        name={AppScreen.RECIPE_FORM}
        children={({ navigation }) => <RecipeForm navigation={navigation} />}
        options={({ navigation }) => ({
          headerRight: () => <Button title="Save" onPress={() => navigation.navigate(AppScreen.RECIPES)} />,
          title: "Recipe Form",
        })}
      />
      <Stack.Screen
        name="photo-capture"
        children={() => <PhotoCapture theme={theme} />}
        options={() => ({ title: "Photo Capture" })}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const { theme, switchTheme } = useThemes();

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
          tabBarStyle: { backgroundColor: theme.background.backgroundColor },
          tabBarActiveTintColor: theme.boldText.color,
          tabBarInactiveTintColor: theme.decentText.color,
          headerStyle: { backgroundColor: theme.background.backgroundColor },
          headerTintColor: theme.text.color,
        })}
      >
        <Tab.Screen
          name={AppScreen.HOME}
          children={() => <HomeScreen theme={theme} />}
          options={() => ({ title: "Home" })}
        />
        <Tab.Screen
          name={AppScreen.HOME}
          children={() => <RecipeStack theme={theme} />}
          options={{ headerShown: false, title: "Recipes" }}
        />
        <Tab.Screen
          name={AppScreen.SHOPPING}
          children={() => <ShoppingScreen theme={theme} />}
          options={() => ({ title: "Shopping" })}
        />
        <Tab.Screen
          name={AppScreen.SETTINGS}
          children={() => <SettingsScreen theme={theme} switchTheme={switchTheme} />}
          options={() => ({ title: "Settings" })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
