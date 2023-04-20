import { StyleSheet, useColorScheme } from "react-native";

const lightTheme = StyleSheet.create({
  text: { color: "#222" },
  background: { backgroundColor: "#fff" },
  boldText: { color: "#3b5998" },
  decentText: { color: "#222" },
});

const darkTheme = StyleSheet.create({
  text: { color: "#fff" },
  background: { backgroundColor: "#222" },
  boldText: { color: "#7f9ddc" },
  decentText: { color: "#ddd" },
});

const theme = useColorScheme() === "light" ? lightTheme : darkTheme;

export default theme;
