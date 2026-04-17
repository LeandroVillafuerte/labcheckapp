import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../utils/constants/colors";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    area: "",
    role: "operator",
    password: "",
  });

  const changeField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <Text style={styles.eyebrow}>Usuarios</Text>
          <Text variant="headlineSmall" style={styles.title}>
            Alta y edicion de perfil
          </Text>
          <Text style={styles.subtitle}>
            Configura datos basicos del usuario con un formulario mas claro y
            facil de completar.
          </Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.sectionTitle}>Informacion principal</Text>

          <TextInput
            label="Nombre completo"
            mode="outlined"
            value={form.name}
            onChangeText={(value) => changeField("name", value)}
            style={styles.input}
            textColor={colors.text_primary}
            outlineColor={colors.border_soft}
            activeOutlineColor={colors.accent}
            theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
          />

          <TextInput
            label="Email"
            mode="outlined"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(value) => changeField("email", value)}
            style={styles.input}
            textColor={colors.text_primary}
            outlineColor={colors.border_soft}
            activeOutlineColor={colors.accent}
            theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
          />

          <TextInput
            label="Area o sector"
            mode="outlined"
            value={form.area}
            onChangeText={(value) => changeField("area", value)}
            style={styles.input}
            textColor={colors.text_primary}
            outlineColor={colors.border_soft}
            activeOutlineColor={colors.accent}
            theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
          />

          <Text style={styles.segmentLabel}>Permisos</Text>
          <SegmentedButtons
            value={form.role}
            onValueChange={(value) => changeField("role", value)}
            buttons={[
              { value: "operator", label: "Operador" },
              { value: "supervisor", label: "Supervisor" },
            ]}
            style={styles.segment}
            theme={{
              colors: {
                secondaryContainer: colors.accent_soft,
                onSecondaryContainer: colors.text_primary,
                outline: colors.border_soft,
              },
            }}
          />

          <TextInput
            label="Clave temporal"
            mode="outlined"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => changeField("password", value)}
            style={styles.input}
            textColor={colors.text_primary}
            outlineColor={colors.border_soft}
            activeOutlineColor={colors.accent}
            theme={{ colors: { onSurfaceVariant: colors.text_muted } }}
          />

          <View style={styles.actions}>
            <Button
              mode="outlined"
              textColor={colors.text_secondary}
              style={styles.secondaryButton}
              contentStyle={styles.buttonContent}
            >
              Cancelar
            </Button>
            <Button
              mode="contained"
              buttonColor={colors.accent}
              textColor={colors.bg_1_color}
              style={styles.primaryButton}
              contentStyle={styles.buttonContent}
            >
              Guardar usuario
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen_bg,
  },
  content: {
    padding: 18,
    gap: 16,
  },
  heroCard: {
    padding: 22,
    borderRadius: 28,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
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
    marginBottom: 8,
  },
  subtitle: {
    color: colors.text_secondary,
    lineHeight: 20,
  },
  formCard: {
    padding: 22,
    borderRadius: 28,
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
    marginBottom: 14,
    backgroundColor: colors.surface_2,
  },
  segmentLabel: {
    color: colors.text_secondary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  segment: {
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  secondaryButton: {
    flex: 1,
    borderColor: colors.border_soft,
  },
  primaryButton: {
    flex: 1,
  },
  buttonContent: {
    minHeight: 50,
  },
});

export default Register;
