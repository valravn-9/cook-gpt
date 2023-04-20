import { useEffect, useState } from "react";
import { ColorSchemeName } from "react-native/types";
import themes from "../styles/themes";

const useTheme = () => {
  const [themeName, setThemeName] = useState<ColorSchemeName>("light");
  const [theme, setTheme] = useState<any>(themes.lightTheme);

  useEffect(() => {
    setTheme(() => (themeName === "light" ? themes.lightTheme : themes.darkTheme));
  }, [themeName]);

  const switchTheme = () => {
    setThemeName((currentThemeName: ColorSchemeName) =>
      currentThemeName === "light" ? "dark" : "light"
    );
  };

  return { theme, switchTheme };
};

export default useTheme;
