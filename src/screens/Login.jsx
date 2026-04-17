import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
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
        setError("El usuario o la contrasena no son correctos");
      } else {
        login(userDetails);
      }
    },
  });

  const hasErrors = Boolean(
    formik.errors.username || formik.errors.password || error
  );

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardView}
      >
        <View style={styles.container}>
          <View style={styles.brandBlock}>
            <Text style={styles.eyebrow}>Check App</Text>
            <Text variant="headlineMedium" style={styles.title}>
              Inicia sesion
            </Text>
            <Text style={styles.subtitle}>
              Accede al panel para gestionar registros, usuarios y controles
              con una experiencia mas simple.
            </Text>
          </View>

          <View style={styles.formCard}>
            <Text style={styles.sectionTitle}>Credenciales</Text>

            <TextInput
              label="Email"
              placeholder="laboratorio@gmail.com"
              mode="outlined"
              style={styles.input}
              autoCapitalize="none"
              value={formik.values.username}
              onChangeText={(text) => formik.setFieldValue("username", text)}
              textColor={colors.text_primary}
              outlineColor={colors.border_soft}
              activeOutlineColor={colors.accent}
              theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
            />

            <TextInput
              label="Contrasena"
              placeholder="Ingresa tu contrasena"
              secureTextEntry={secureTextEntry}
              mode="outlined"
              style={styles.input}
              autoCapitalize="none"
              value={formik.values.password}
              onChangeText={(text) => formik.setFieldValue("password", text)}
              textColor={colors.text_primary}
              outlineColor={colors.border_soft}
              activeOutlineColor={colors.accent}
              theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye" : "eye-off"}
                  color={colors.text_muted}
                  onPress={() => setSecureTextEntry((prev) => !prev)}
                />
              }
            />

            <HelperText type="error" visible={hasErrors} style={styles.error}>
              {formik.errors.username || formik.errors.password || error || " "}
            </HelperText>

            <Button
              icon="login"
              mode="contained"
              buttonColor={colors.accent}
              textColor={colors.bg_1_color}
              contentStyle={styles.buttonContent}
              style={styles.primaryButton}
              onPress={formik.handleSubmit}
            >
              Entrar
            </Button>

            <View style={styles.hintCard}>
              <Text style={styles.hintLabel}>Acceso de prueba</Text>
              <Text style={styles.hintText}>Usuario: laboratorio@gmail.com</Text>
              <Text style={styles.hintText}>Clave: prueba123</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    password: Yup.string().required("La contrasena es obligatoria"),
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen_bg,
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 24,
    gap: 18,
  },
  brandBlock: {
    paddingHorizontal: 4,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    color: colors.text_primary,
    marginBottom: 10,
  },
  subtitle: {
    color: colors.text_secondary,
    lineHeight: 22,
    maxWidth: 340,
  },
  formCard: {
    padding: 22,
    borderRadius: 30,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  sectionTitle: {
    color: colors.text_primary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.surface_2,
    marginBottom: 14,
  },
  error: {
    color: colors.danger,
    marginBottom: 8,
  },
  primaryButton: {
    marginTop: 4,
    borderRadius: 18,
  },
  buttonContent: {
    minHeight: 52,
  },
  hintCard: {
    marginTop: 18,
    padding: 16,
    borderRadius: 22,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  hintLabel: {
    color: colors.accent_warm,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  hintText: {
    color: colors.text_secondary,
    lineHeight: 20,
  },
});
