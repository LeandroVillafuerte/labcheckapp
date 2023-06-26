import { Button, SafeAreaView, Text } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth.js";

export default function Account() {
  const { auth, logout } = useAuth();
  return (
    <SafeAreaView>
      <Text>Account</Text>
      <Text>Bienvenido {auth?.name}</Text>
      <Button title="Cerrar Sesión" onPress={logout} />
    </SafeAreaView>
  );
}
