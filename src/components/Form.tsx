import React, { ReactNode } from "react";
import { ScrollView } from "react-native";
import { Portal, Modal, Surface, Appbar, useTheme } from "react-native-paper";

interface IProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
  onSave?: (item: any) => void;
  item: any;
  children: ReactNode;
}

const Form = ({ title, visible, onCancel, onSave, children, item }: IProps) => {
  const { colors } = useTheme();
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onCancel} contentContainerStyle={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0 }}>
        <Surface style={{ height: "100%" }}>
          <Appbar.Header statusBarHeight={0}>
            <Appbar.Action icon="close" onPress={onCancel} color={colors.primary} />
            <Appbar.Content title={title} />
            {onSave ? <Appbar.Action icon="content-save" onPress={() => onSave(item)} color={colors.primary} /> : void 0}
          </Appbar.Header>
          <ScrollView style={{ padding: 10 }}>{children}</ScrollView>
        </Surface>
      </Modal>
    </Portal>
  );
};

export default Form;
