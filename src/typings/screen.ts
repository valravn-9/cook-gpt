import { ReactNode } from "react";
import { ITitlebarProps } from "./titlebar";

export interface IScreenProps {
  titlebarOptions: ITitlebarProps;
  children?: ReactNode;
}
