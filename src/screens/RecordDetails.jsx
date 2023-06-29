import { View, Text } from "react-native";
import React, { useState, useCallback } from "react";
import useWithoutHeader from "../hooks/useWithoutHeader";

const RecordDetails = (props) => {
  const { navigation, route } = props;

  useWithoutHeader();
  return (
    <View>
      <Text>RecordDetails</Text>
    </View>
  );
};

export default RecordDetails;
