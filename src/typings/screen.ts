import { ReactNode } from "react";
import { ITitleBarProps } from "./titleBar";

export interface IScreenProps {
  titleBarOptions: ITitleBarProps;
  children?: ReactNode;
}
