import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountNavigation from "./AccountNavigation";
import useAuth from "../hooks/useAuth";
import Login from "../screens/Login";
import menuButton from "../components/menuButton";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const { auth } = useAuth();

  if (!auth) return null;

  return (
    <>
      {auth !== "notlogged" ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Registros"
            component={HomeNavigation}
            options={{
              tabBarLabel: "Registros",
              tabBarIcon: ({ color, size }) => (
                <Icon name="clipboard-list" color={color} size={size} />
              ),
              headerRight: menuButton,
              headerShown: false,
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
