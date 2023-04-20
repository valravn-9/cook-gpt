import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";

interface HomeScreenProps {
  theme: any;
}

const HomeScreen = ({ theme }: HomeScreenProps) => {
  return <View style={{ ...styles.screen, ...theme.background }}></View>;
};

export default HomeScreen;
