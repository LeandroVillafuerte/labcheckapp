import React, { useState, useCallback } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import RadioButton from "../components/RadioButton";
import { Formik, Field, FieldArray } from "formik";

const Checklist = (props) => {
  const [form, setForm] = useState(formItems);
  useFocusEffect(
    useCallback(() => {
      props.navigation.getParent().setOptions({ headerShown: false });
      return () => {
        props.navigation.getParent().setOptions({ headerShown: true });
      };
    }, [])
  );

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
    <View>
      {form.map((formItem, indexItem) => (
        <View key={"formItem" + formItem.id}>
          <Text>{formItem.text}</Text>
          {formItem.options.map((option, indexOption) => (
            <View key={option.text + indexItem + indexOption}>
              <Text>{option.text}</Text>
              <RadioButton
                handlePress={() => handlePress(indexItem, indexOption)}
                selected={option.selected}
              />
            </View>
          ))}
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const formItems = [
  {
    id: 1,
    text: "Prueba",
    options: [
      { text: "uno", selected: false },
      { text: "dos", selected: true },
    ],
  },
  {
    id: 2,
    text: "Prueba2",
    options: [
      { text: "uno", selected: false },
      { text: "dos", selected: true },
    ],
  },
];

export default Checklist;
