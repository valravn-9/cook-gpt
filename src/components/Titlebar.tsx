import React from "react";
import { Appbar } from "react-native-paper";

interface IButtonProps {
  icon: string;
  onPress: () => void;
}

interface ITitlebarProps {
  title: string;
  backButton?: IButtonProps;
  buttons?: IButtonProps[];
}

const Titlebar = ({ title, buttons, backButton }: ITitlebarProps) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      {backButton ? <Appbar.BackAction onPress={backButton.onPress} /> : null}
      <Appbar.Content title={title} />
      {buttons?.map((button: IButtonProps) => {
        return <Appbar.Action icon={button.icon} onPress={button.onPress} />;
      })}
    </Appbar.Header>
  );
};

export default Titlebar;
