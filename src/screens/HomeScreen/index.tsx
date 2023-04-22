import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import { useTheme } from "react-native-paper";

const HomeScreen = () => {
  const { colors } = useTheme();
  return <View style={{ ...styles.screen, backgroundColor: colors.background }}></View>;
};

export default HomeScreen;
