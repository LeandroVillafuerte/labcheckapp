import { View, Text } from "react-native";
import React from "react";
import useWithoutHeader from "../hooks/useWithoutHeader";

const UsersAdmin = () => {
  useWithoutHeader();
  return (
    <View>
      <Text>UsersAdmin</Text>
    </View>
  );
};

export default UsersAdmin;
