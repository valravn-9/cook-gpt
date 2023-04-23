import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

interface IScreenProps {
  children: ReactNode;
}

const Screen = ({ children }: IScreenProps) => {
  return <Surface style={styles.surface}>{children}</Surface>;
};

const styles = StyleSheet.create({
  surface: { flex: 1 },
});

export default Screen;
