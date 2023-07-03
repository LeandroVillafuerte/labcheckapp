import { Button, SafeAreaView, Text } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth.js";
import { Avatar } from "react-native-paper";

export default function Account() {
  const { auth, logout } = useAuth();
  return (
    <SafeAreaView>
      <Avatar.Text size={70} label={auth?.name[0]} />
      <Text>Account</Text>
      <Text>Bienvenido {auth?.name}</Text>
      <Button title="Cerrar Sesión" onPress={logout} />
    </SafeAreaView>
  );
}
