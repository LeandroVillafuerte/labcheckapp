import { View, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";

const RadioButton = ({ handlePress, selected }) => {
  return (
    <TouchableHighlight onPress={handlePress} value={selected}>
      <View
        style={[styles.radioButton, selected && styles.radioButtonSelected]}
      >
        {selected && <View style={styles.radioButtonInner} />}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    borderColor: "#000",
  },
  radioButtonInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },
});

export default RadioButton;
