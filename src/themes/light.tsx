import { MD3LightTheme } from "react-native-paper";

const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    secondaryContainer: "transparent",
    primary: "#3f51b5",
    onPrimary: "#ffffff",
  },
};

export default LightTheme;
