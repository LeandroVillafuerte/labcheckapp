import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountNavigation from "./AccountNavigation";
import useAuth from "../hooks/useAuth";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const { auth } = useAuth();
  return (
    <>
      {auth ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Registros"
            component={HomeNavigation}
            options={{
              tabBarLabel: "Registros",
              tabBarIcon: ({ color, size }) => (
                <Icon name="clipboard-list" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={AccountNavigation}
            options={{
              // tabBarLabel: "Perfil",
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} solid />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Login />
      )}
    </>
  );
}
