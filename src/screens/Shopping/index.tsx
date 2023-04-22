import React from "react";
import { View } from "react-native";
import styles from "../../../styles";
import { useTheme } from "react-native-paper";

const ShoppingScreen = () => {
  const { colors } = useTheme();
  return <View style={{ ...styles.screen, backgroundColor: colors.background }}></View>;
};

export default ShoppingScreen;
