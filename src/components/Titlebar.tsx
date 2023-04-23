import React from "react";
import { Appbar } from "react-native-paper";
import { ITitlebarProps, IButtonProps } from "../typings/titlebar";

const Titlebar = ({ title, buttons, backButton }: ITitlebarProps) => {
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

export default Titlebar;
