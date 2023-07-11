import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import Checklist from "../screens/Checklist";
import RecordDetails from "../screens/RecordDetails";
import RecordEditor from "../screens/RecordEditor";
import UsersAdmin from "../screens/UsersAdmin";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="Latest records"
        component={HomeScreen}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="New Record"
        component={Checklist}
        options={{ title: "Nuevo Registro" }}
      />
      <Stack.Screen
        name="Record Card"
        component={RecordDetails}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="Users"
        component={UsersAdmin}
        options={{ title: "Gestionar usuarios" }}
      />
      <Stack.Screen
        name="Record sheet editor"
        component={RecordEditor}
        options={{ title: "Editar hoja de registro" }}
      />
    </Stack.Navigator>
  );
}
