import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface SettingsScreenProps {
  switchTheme?: () => void;
}

const SettingsScreen = ({ switchTheme }: SettingsScreenProps) => {
  return (
    <LinearGradient colors={["#fff", "#3b5998", "#000"]} style={styles.gradient}>
      <View style={styles.screen}>
        <TouchableOpacity onPress={switchTheme}>
          <Text style={styles.logo}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  screen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    fontSize: 100,
  },
});

export default SettingsScreen;
