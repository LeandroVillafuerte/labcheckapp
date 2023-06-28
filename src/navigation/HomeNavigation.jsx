import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import Checklist from "../screens/Checklist";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="Latest registers"
        component={HomeScreen}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="New Record"
        component={Checklist}
        options={{ title: "Nuevo Registro" }}
      />
    </Stack.Navigator>
  );
}
