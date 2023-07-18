import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import users from "../utils/mockups/users.js";
import { Text, IconButton, Switch } from "react-native-paper";
import colors from "../utils/constants/colors";
import { useNavigation } from "@react-navigation/native";

const UsersAdmin = () => {
  return (
    <>
      <View style={styles.formHeader}>
        <Text style={{ flex: 9 }}>Usuario</Text>
        <Text style={{ flex: 1, minWidth: 60 }}>Editar info</Text>
        <Text style={{ flex: 1, minWidth: 70 }}>Habilitado/deshabilitado</Text>
      </View>
      <ScrollView style={styles.formContainer}>
        {users.map((user) => (
          <RenderItem user={user} key={user.id} />
        ))}
      </ScrollView>
    </>
  );
};

const RenderItem = ({ user }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(user.enabled);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigation = useNavigation();

  return (
    <View style={styles.itemsContainer}>
      <Text style={{ flex: 2 }}>{user.name}</Text>
      <IconButton
        style={{ flex: 1, padding: 0, margin: 0 }}
        icon={"pencil"}
        onPress={() => navigation.navigate("Register")}
      />
      <Switch
        style={{ flex: 1, marginRight: 20 }}
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: colors.medium_2_color,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: colors.bg_3_color,
    borderRadius: 12,
  },
  textItem: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  btnSubmitContainer: {
    paddingVertical: 20,
  },
});

export default UsersAdmin;
