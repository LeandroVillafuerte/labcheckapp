import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import users from "../utils/mockups/users.js";
import { Button, Switch, Text } from "react-native-paper";
import colors from "../utils/constants/colors";
import { useNavigation } from "@react-navigation/native";

const UsersAdmin = () => {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Administracion</Text>
        <Text variant="headlineSmall" style={styles.title}>
          Usuarios y permisos
        </Text>
        <Text style={styles.subtitle}>
          Gestiona el estado de acceso y entra al editor de cada perfil desde
          una vista mas clara.
        </Text>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Usuarios activos</Text>
          <Text style={styles.summaryValue}>
            {users.filter((user) => user.enabled).length}
          </Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Pendientes</Text>
          <Text style={styles.summaryValue}>
            {users.filter((user) => !user.enabled).length}
          </Text>
        </View>
      </View>

      {users.map((user) => (
        <RenderItem user={user} key={user.id} />
      ))}
    </ScrollView>
  );
};

const RenderItem = ({ user }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(user.enabled);
  const onToggleSwitch = () => setIsSwitchOn((prev) => !prev);
  const navigation = useNavigation();

  return (
    <View style={styles.userCard}>
      <View style={styles.userHeader}>
        <View style={styles.userIdentity}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
        <View
          style={[
            styles.statusChip,
            isSwitchOn ? styles.statusChipActive : styles.statusChipInactive,
          ]}
        >
          <Text
            style={[
              styles.statusChipText,
              isSwitchOn
                ? styles.statusChipTextActive
                : styles.statusChipTextInactive,
            ]}
          >
            {isSwitchOn ? "Habilitado" : "Pausado"}
          </Text>
        </View>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>Ultima actividad: {user.time}</Text>
      </View>

      <View style={styles.cardActions}>
        <Button
          icon="pencil"
          mode="outlined"
          textColor={colors.text_secondary}
          style={styles.editButton}
          onPress={() => navigation.navigate("Register")}
        >
          Editar
        </Button>

        <View style={styles.switchWrap}>
          <Text style={styles.switchLabel}>Acceso</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen_bg,
  },
  content: {
    padding: 18,
    paddingBottom: 34,
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
  summaryRow: {
    flexDirection: "row",
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 22,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  summaryLabel: {
    color: colors.text_muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  summaryValue: {
    color: colors.text_primary,
    fontSize: 28,
    fontWeight: "700",
  },
  userCard: {
    padding: 18,
    borderRadius: 24,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  userHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  userIdentity: {
    flex: 1,
  },
  userName: {
    color: colors.text_primary,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  userEmail: {
    color: colors.text_secondary,
    lineHeight: 20,
  },
  statusChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
  },
  statusChipActive: {
    backgroundColor: "rgba(137, 214, 157, 0.14)",
  },
  statusChipInactive: {
    backgroundColor: colors.accent_warm_soft,
  },
  statusChipText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  statusChipTextActive: {
    color: colors.success,
  },
  statusChipTextInactive: {
    color: colors.accent_warm,
  },
  metaRow: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: colors.border_soft,
  },
  metaText: {
    color: colors.text_muted,
    fontSize: 13,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: 16,
  },
  editButton: {
    borderColor: colors.border_soft,
  },
  switchWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchLabel: {
    color: colors.text_secondary,
    fontWeight: "600",
  },
});

export default UsersAdmin;
