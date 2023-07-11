import { View, Text } from "react-native";
import React from "react";
import { IconButton, Menu, Divider, Button } from "react-native-paper";

const menuButton = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<IconButton icon="menu" size={30} onPress={openMenu} />}
    >
      <Menu.Item onPress={() => {}} title="Editar formulario" />
      <Menu.Item onPress={() => {}} title="Gestionar usuarios" />
    </Menu>
  );
};

export default menuButton;
