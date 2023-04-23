import React from "react";
import Screen from "../../components/Screen";
import { Avatar, Card, MD3LightTheme, MD3Theme, Switch, Divider } from "react-native-paper";

interface ISettingsScreen {
  theme: MD3Theme;
  switchTheme: () => void;
}

const SettingsScreen = ({ switchTheme, theme }: ISettingsScreen) => {
  return (
    <Screen TitleBarOptions={{ title: "Settings" }}>
      <Card.Title
        title="Light Theme"
        subtitle="Set light theme for the whole app"
        left={(props) => <Avatar.Icon {...props} icon="white-balance-sunny" />}
        right={() => <Switch value={theme === MD3LightTheme} onValueChange={switchTheme} />}
        style={{ padding: 10 }}
      />
      <Divider />
    </Screen>
  );
};

export default SettingsScreen;
