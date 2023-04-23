import * as React from "react";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import RecipesScreen from "./src/screens/RecipesScreen";
import SettingsScreen from "./src/screens/Settings";
import ShoppingScreen from "./src/screens/Shopping";
import "react-native-url-polyfill/auto";
import { BottomNavigation, MD3DarkTheme, Provider as PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AppScreen } from "./src/typings/app";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
              navigationState={state}
              safeAreaInsets={insets}
              onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (event.defaultPrevented) {
                  preventDefault();
                } else {
                  navigation.dispatch({
                    ...CommonActions.navigate(route.name, route.params),
                    target: state.key,
                  });
                }
              }}
              renderIcon={({ route, focused, color }) => {
                const { options } = descriptors[route.key];
                if (options.tabBarIcon) {
                  return options.tabBarIcon({ focused, color, size: 24 });
                }

                return null;
              }}
              getLabelText={({ route }: any) => {
                const { options } = descriptors[route.key];
                return options.tabBarLabel || options.title || route.title;
              }}
            />
          )}
        >
          <Tab.Screen
            name={AppScreen.HOME}
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name={AppScreen.RECIPES}
            component={RecipesScreen}
            options={{
              tabBarLabel: "Recipes",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="book" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name={AppScreen.SHOPPING}
            component={ShoppingScreen}
            options={{
              tabBarLabel: "Shopping",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="shopping" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name={AppScreen.SETTINGS}
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="cog" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
