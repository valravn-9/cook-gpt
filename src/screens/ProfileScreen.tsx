import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.profileScreen}>
      <Text style={styles.logo}>👤</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileScreen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    fontSize: 100,
  },
});

export default ProfileScreen;
