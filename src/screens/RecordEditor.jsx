import { View, Text } from "react-native";
import React from "react";
import useWithoutHeader from "../hooks/useWithoutHeader";

const RecordEditor = () => {
  useWithoutHeader();
  return (
    <View>
      <Text>RecordEditor</Text>
    </View>
  );
};

export default RecordEditor;
