export interface IButtonProps {
  icon: string;
  onPress: () => void;
}

export interface ITitlebarProps {
  title: string;
  backButton?: IButtonProps;
  buttons?: IButtonProps[];
}
