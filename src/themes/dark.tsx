import { MD3DarkTheme } from "react-native-paper";

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    secondaryContainer: "transparent",
    primary: "#7f91f5",
    onPrimary: "#ffffff",
  },
};

export default DarkTheme;
