import React from "react";
import Screen from "../../components/Screen";
import { MD3Theme } from "react-native-paper";
import SettingsItem from "./SettingsItem";
import LightTheme from "../../themes/light";

interface ISettingsScreen {
  theme: MD3Theme;
  switchTheme: () => void;
}

const SettingsScreen = ({ switchTheme, theme }: ISettingsScreen) => {
  return (
    <Screen titleBarOptions={{ title: "Settings" }}>
      <SettingsItem
        title="Light Theme"
        subtitle="Set light theme for the whole app"
        icon="white-balance-sunny"
        active={theme === LightTheme}
        onValueChange={switchTheme}
      />
    </Screen>
  );
};

export default SettingsScreen;
