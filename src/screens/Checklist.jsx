import React, { useState, useCallback } from "react";
import { ScrollView, View, Button, StyleSheet, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { formItems } from "../utils/mockups/form.js";
import useWithoutHeader from "../hooks/useWithoutHeader.js";

const Checklist = () => {
  const [form, setForm] = useState(formItems);
  useWithoutHeader();

  const handlePress = (indexItem, indexOption) => {
    setForm((prevForm) =>
      prevForm.map((item, index) => {
        if (indexItem === index) {
          return {
            ...item,
            options: item.options.map((option, optionIndex) => ({
              ...option,
              selected: optionIndex === indexOption,
            })),
          };
        } else {
          return item;
        }
      })
    );
  };

  const handleSubmit = () => {
    console.log(form);
  };
  return (
    <ScrollView>
      <View style={styles.formContainer}>
        {form.map((formItem, indexItem) => (
          <View key={"formItem" + formItem.id}>
            <View style={styles.itemsContainer}>
              <Text style={styles.textItem}>{formItem.text}</Text>

              {formItem.options.map((option, indexOption) => (
                <View
                  key={option.text + indexItem + indexOption}
                  style={[
                    styles.option,
                    indexOption < formItem.options.length - 1 &&
                      styles.optionDivider,
                  ]}
                >
                  <Text style={styles.textOption}>{option.text}</Text>
                  <View style={styles.btnOptionContainer}>
                    <RadioButton
                      onPress={() => handlePress(indexItem, indexOption)}
                      status={option.selected ? "checked" : "unchecked"}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
        <View style={styles.btnSubmitContainer}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  itemsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "rgba(205, 219, 250, 0.789)",
    borderRadius: 12,
  },
  textItem: {
    fontWeight: "bold",
    fontSize: 15,
  },
  option: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  optionDivider: {
    borderBottomWidth: 0.7,
    borderBottomColor: "rgb(176, 196, 222)",
  },
  textOption: {
    fontSize: 13,
    flexBasis: 90,
  },
  btnOptionContainer: {},
  btnSubmitContainer: {
    paddingVertical: 20,
  },
});

export default Checklist;
