import { ReactNode } from "react";
import { ITitleBarProps } from "./titleBar";

export interface IScreenProps {
  TitleBarOptions: ITitleBarProps;
  children?: ReactNode;
}
