import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  return (
    <LinearGradient colors={["#fff", "#3b5998", "#000"]} style={styles.linearGradient}>
      <View style={styles.screen}>
        <Text style={styles.logo}>🤖</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  linearGradient: {
    flex: 1,
  },
  logo: {
    fontSize: 100,
  },
});

export default HomeScreen;
