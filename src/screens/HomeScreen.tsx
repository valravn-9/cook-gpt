import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.logo}>🤖</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    fontSize: 100,
  },
});

export default HomeScreen;
