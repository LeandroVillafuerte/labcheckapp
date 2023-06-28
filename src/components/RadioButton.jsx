import { View, TouchableHighlight } from "react-native";
import React from "react";

const RadioButton = (props) => {
  return (
    <TouchableHighlight>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#000",
            alignItems: "center",
            justifyContent: "center",
          },
          props.style,
        ]}
      >
        {props.selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#000",
            }}
          />
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

export default RadioButton;
