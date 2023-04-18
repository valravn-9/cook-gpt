import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <LinearGradient colors={["#fff", "#3b5998", "#000"]} style={styles.gradient}>
      <View style={styles.screen}>
        <Text style={styles.logo}>⚙️</Text>
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
