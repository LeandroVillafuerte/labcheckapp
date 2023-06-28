import { View, Text } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";

const ChecklistItem = ({ value }) => {
  return (
    <View>
      <Text>{value.text}</Text>
      {value.options.map((option, index) => {
        return (
          <View key={option.text + Math.random() * index}>
            <Text>{option.text}</Text>
            <RadioButton selected={option.selected} />
          </View>
        );
      })}
    </View>
  );
};

export default ChecklistItem;
