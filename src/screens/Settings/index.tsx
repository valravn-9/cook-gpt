import React from "react";
import { View, Button } from "react-native";
import styles from "../../../styles";

interface SettingsScreenProps {
  theme: any;
  switchTheme?: () => void;
}

const SettingsScreen = ({ theme, switchTheme }: SettingsScreenProps) => {
  return (
    <View style={{ ...styles.screen, ...theme.background }}>
      <Button title="Switch Theme" onPress={switchTheme} />
    </View>
  );
};

export default SettingsScreen;
