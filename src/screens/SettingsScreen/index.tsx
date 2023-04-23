import React from "react";
import Screen from "../../components/Screen";
import { Avatar, Card, MD3LightTheme, MD3Theme, Switch, Divider } from "react-native-paper";
import SettingsItem from "./SettingsItem";

interface ISettingsScreen {
  theme: MD3Theme;
  switchTheme: () => void;
}

const SettingsScreen = ({ switchTheme, theme }: ISettingsScreen) => {
  return (
    <Screen TitleBarOptions={{ title: "Settings" }}>
      <SettingsItem
        title="Light Theme"
        subtitle="Set light theme for the whole app"
        icon="white-balance-sunny"
        active={theme === MD3LightTheme}
        onValueChange={switchTheme}
      />
    </Screen>
  );
};

export default SettingsScreen;
