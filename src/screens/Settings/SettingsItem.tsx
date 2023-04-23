import React from "react";
import { Card, Divider, Switch, Avatar } from "react-native-paper";

interface IProps {
  title: string;
  subtitle: string;
  icon: string;
  active: boolean;
  onValueChange: () => void;
}

const SettingsItem = ({ active, onValueChange, title, subtitle, icon }: IProps) => {
  return (
    <Card.Content>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        right={() => <Switch value={active} onValueChange={onValueChange} />}
      />
      <Divider />
    </Card.Content>
  );
};

export default SettingsItem;
