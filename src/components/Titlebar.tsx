import React from "react";
import { Appbar } from "react-native-paper";
import { IButtonProps, ITitleBarProps } from "../typings/titleBar";

const TitleBar = ({ title, buttons, backButton }: ITitleBarProps) => {
  return (
    <Appbar.Header>
      {backButton ? <Appbar.BackAction onPress={backButton.onPress} /> : null}
      <Appbar.Content title={title} />
      {buttons?.map((button: IButtonProps) => {
        return <Appbar.Action icon={button.icon} onPress={button.onPress} />;
      })}
    </Appbar.Header>
  );
};

export default TitleBar;
