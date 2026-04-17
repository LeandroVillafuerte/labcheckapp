import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../hooks/useAuth.js";
import colors from "../utils/constants/colors";

export default function Account() {
  const { auth, logout } = useAuth();
  const initials =
    auth?.name
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((value) => value[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Card elevation={2} style={styles.card}>
          <View style={styles.hero}>
            <Avatar.Text size={80} label={initials} style={styles.avatar} />
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>Cuenta activa</Text>
              <Text variant="headlineSmall" style={styles.title}>
                Bienvenido, {auth?.name}
              </Text>
              <Text style={styles.subtitle}>{auth?.mail}</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Registros</Text>
              <Text variant="titleLarge" style={styles.statValue}>
                22
              </Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Ultimo control</Text>
              <Text style={styles.statValueSmall}>15/06/2023</Text>
            </View>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.sectionTitle}>Resumen</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Correo</Text>
              <Text style={styles.detailValue}>{auth?.mail}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Estado</Text>
              <Text style={styles.detailValue}>En linea</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Rol</Text>
              <Text style={styles.detailValue}>Operador</Text>
            </View>
          </View>

          <Button
            icon="power"
            mode="contained"
            buttonColor={colors.accent}
            textColor={colors.bg_1_color}
            contentStyle={styles.buttonContent}
            style={styles.logoutButton}
            onPress={logout}
          >
            Cerrar sesion
          </Button>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen_bg,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    padding: 22,
    borderRadius: 28,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    backgroundColor: colors.accent_warm,
  },
  heroCopy: {
    flex: 1,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  title: {
    color: colors.text_primary,
    marginBottom: 4,
  },
  subtitle: {
    color: colors.text_secondary,
    fontSize: 14,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 22,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  statLabel: {
    color: colors.text_muted,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  statValue: {
    color: colors.text_primary,
  },
  statValueSmall: {
    color: colors.text_primary,
    fontSize: 18,
    fontWeight: "700",
  },
  summaryCard: {
    marginTop: 22,
    padding: 18,
    borderRadius: 22,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
    gap: 14,
  },
  sectionTitle: {
    color: colors.text_primary,
    fontSize: 16,
    fontWeight: "700",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabel: {
    color: colors.text_muted,
    fontSize: 14,
  },
  detailValue: {
    color: colors.text_secondary,
    fontSize: 14,
    fontWeight: "600",
  },
  logoutButton: {
    marginTop: 22,
  },
  buttonContent: {
    minHeight: 50,
  },
});
