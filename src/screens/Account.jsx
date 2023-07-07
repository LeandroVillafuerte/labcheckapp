import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth.js";
import { Avatar, Text } from "react-native-paper";
import { Button, Card } from "react-native-paper";

export default function Account() {
  const { auth, logout } = useAuth();
  return (
    <SafeAreaView>
      <Card elevation={3} style={styles.card}>
        <Avatar.Text size={70} label={auth?.name[0]} style={styles.avatarImg} />
        <View style={styles.title}>
          <Text variant="titleLarge">Bienvenido {auth?.name}</Text>
        </View>
        <View style={styles.body}>
          <Text variant="bodyLarge">Email: {auth?.mail}</Text>
          <Text variant="bodyLarge">Registros realizados: 22</Text>
          <Text variant="bodyLarge">Último registro: 15/06/2023 16:21hs</Text>
        </View>
        <View style={styles.btn}>
          <Button icon="power" mode="contained" onPress={logout}>
            Cerrar Sesión
          </Button>
        </View>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 15,
    height: 350,
  },
  avatarImg: { alignSelf: "center" },
  title: { padding: 10, alignSelf: "center" },
  btn: { top: 30, width: 300, alignSelf: "center" },
  body: { padding: 10 },
});
