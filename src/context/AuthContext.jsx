import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCOUNT_STORAGE } from "../utils/constants";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await AsyncStorage.getItem(ACCOUNT_STORAGE);
        const user = JSON.parse(response || "[]");
        console.log("USER SET");
        if (user.length) setAuth(...user);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  const login = async (userData) => {
    try {
      await AsyncStorage.setItem(ACCOUNT_STORAGE, JSON.stringify([userData]));
    } catch (error) {
      throw error;
    }
    setAuth(userData);
  };

  const logout = async () => {
    try {
      await AsyncStorage.setItem(ACCOUNT_STORAGE, JSON.stringify([]));
    } catch (error) {
      throw error;
    }
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
