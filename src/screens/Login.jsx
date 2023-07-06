import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
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
    <>
      <View>
        <Text style={styles.title}>Iniciar sesión</Text>
      </View>
      <View>
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <TextInput
          label="Contraseña"
          secureTextEntry={secureTextEntry}
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
      <View>
        <Text style={styles.error}>{formik.errors.username}</Text>
        <Text style={styles.error}>{formik.errors.password}</Text>

        <Text style={styles.error}>{error}</Text>
      </View>
      <View style={styles.btn}>
        <Button icon="power" mode="contained" onPress={formik.handleSubmit}>
          Entrar
        </Button>
      </View>
    </>
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
  card: {
    margin: 20,
    padding: 15,
    paddingTop: 60,
    backgroundColor: "#809bce",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 45,
  },
  input: {
    width: 350,
    marginVertical: 10,
    alignSelf: "center",
    backgroundColor: "#95b8d1",
  },
  error: {
    textAlign: "center",
    color: "#f00",
  },
  btn: { paddingVertical: 15, width: 150, alignSelf: "center" },
});
