import { View, Switch, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import RadioButton from "../components/RadioButton";
import ChecklistItem from "../components/ChecklistItem";
import { useFormik } from "formik";

const Checklist = (props) => {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {},
  });
  useFocusEffect(
    useCallback(() => {
      props.navigation.getParent().setOptions({ headerShown: false });
      return () => {
        props.navigation.getParent().setOptions({ headerShown: true });
      };
    }, [])
  );
  return (
    <View>
      <ChecklistItem value={formik.values[0]} />
    </View>
  );
};

const initialValues = () => [
  {
    text: "Prueba",
    options: [
      { text: "uno", selected: false },
      { text: "dos", selected: true },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Checklist;
