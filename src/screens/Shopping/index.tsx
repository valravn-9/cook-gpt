import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";

interface ShoppingScreenProps {
  theme: any;
}

const ShoppingScreen = ({ theme }: ShoppingScreenProps) => {
  return <View style={{ ...styles.screen, ...theme.background }}></View>;
};

export default ShoppingScreen;
