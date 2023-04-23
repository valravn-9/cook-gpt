import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";
import Titlebar from "./Titlebar";
import { IScreenProps } from "../typings/screen";

const Screen = ({ titlebarOptions, children }: IScreenProps) => {
  return (
    <Surface style={styles.surface}>
      <Titlebar {...titlebarOptions} />
      <ScrollView>{children}</ScrollView>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: { height: "100%" },
});

export default Screen;
