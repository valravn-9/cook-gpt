export interface IButtonProps {
  icon: string;
  onPress: () => void;
}

export interface ITitleBarProps {
  title: string;
  backButton?: IButtonProps;
  buttons?: IButtonProps[];
}
