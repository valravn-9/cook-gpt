import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShoppingScreen = () => {
  return (
    <View style={styles.shoppingScreen}>
      <Text style={styles.logo}>🛒</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingScreen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    fontSize: 100,
  },
});

export default ShoppingScreen;
