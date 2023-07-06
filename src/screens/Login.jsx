import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../utils/mockups/user";
import useAuth from "../hooks/useAuth";
import colors from "../utils/constants/colors";

export default function Login() {
  const [error, setError] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Iniciar sesión</Text>
      </View>
      <View>
        <TextInput
          label="Email"
          placeholder="Email..."
          mode="outlined"
          style={styles.input}
          textColor={colors.font_light_1_color}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <TextInput
          label="Contraseña"
          placeholder="Contraseña..."
          secureTextEntry={secureTextEntry}
          textColor={colors.font_light_1_color}
          right={
            <TextInput.Icon
              onPressIn={() => setSecureTextEntry(false)}
              onPressOut={() => setSecureTextEntry(true)}
              icon="eye"
            />
          }
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
      </View>
      {(formik.errors.username || formik.errors.password || error) && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{formik.errors.username}</Text>
          <Text style={styles.error}>{formik.errors.password}</Text>

          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      <View
        style={[
          styles.btn,
          !(formik.errors.username || formik.errors.password || error) && {
            marginTop: 60,
          },
        ]}
      >
        <Button icon="power" mode="contained" onPress={formik.handleSubmit}>
          Entrar
        </Button>
      </View>
      <Text style={[styles.name]}>Check App</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "laboratorio@gmail.com",
    password: "prueba123",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_2_color,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 70,
    marginBottom: 30,
    color: colors.font_light_1_color,
  },
  input: {
    width: 300,
    marginVertical: 10,
    alignSelf: "center",
    backgroundColor: colors.bg_2_color,
    color: "red",
  },
  errorContainer: {
    height: 60,
  },
  error: {
    textAlign: "center",
    color: "#f00",
  },
  btn: { paddingVertical: 15, width: 300, alignSelf: "center" },
  name: {
    color: colors.light_3_color,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
});
