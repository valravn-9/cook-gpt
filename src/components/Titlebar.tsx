import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { IButtonProps, ITitleBarProps } from "../typings/titleBar";

const TitleBar = ({ title, buttons, backButton }: ITitleBarProps) => {
  const { colors } = useTheme();
  return (
    <Appbar.Header>
      {backButton ? (
        <Appbar.BackAction onPress={backButton.onPress} color={colors.primary} />
      ) : null}
      <Appbar.Content title={title} />
      {buttons?.map((button: IButtonProps) => {
        return (
          <Appbar.Action
            key={button.icon}
            icon={button.icon}
            onPress={button.onPress}
            color={colors.primary}
          />
        );
      })}
    </Appbar.Header>
  );
};

export default TitleBar;
