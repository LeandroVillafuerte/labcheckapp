import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Text } from "react-native-paper";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import record from "../utils/mockups/record";
import colors from "../utils/constants/colors";

const RecordDetails = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: `Registro #${record.id}` });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Detalle del registro</Text>
        <Text variant="headlineSmall" style={styles.title}>
          {record.name}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.metaChip}>
            <Icon name="hashtag" size={12} color={colors.accent} />
            <Text style={styles.metaChipText}>Registro {record.id}</Text>
          </View>
          <View style={styles.metaChip}>
            <Icon name="clock" size={12} color={colors.accent} />
            <Text style={styles.metaChipText}>07:40 hs</Text>
          </View>
          <View style={styles.metaChip}>
            <Icon name="calendar-alt" size={12} color={colors.accent} />
            <Text style={styles.metaChipText}>11 May, 2023</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Usuario</Text>
            <Text style={styles.summaryValue}>{record.user}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items respondidos</Text>
            <Text style={styles.summaryValue}>{record.form.length}</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Respuestas registradas</Text>
        <Text style={styles.sectionSubtitle}>
          Cada item muestra el resultado final y su observacion.
        </Text>
      </View>

      {record.form.map((item) => (
        <View key={`item-${item.id}`} style={styles.answerCard}>
          <View style={styles.answerHeader}>
            <View style={styles.answerIcon}>
              <Icon name="clipboard-check" size={14} color={colors.accent} />
            </View>
            <Text style={styles.answerTitle}>{item.title}</Text>
          </View>

          <View style={styles.answerRow}>
            <Text style={styles.answerLabel}>Resultado</Text>
            <Text style={styles.answerValue}>{item.checked}</Text>
          </View>

          <View style={styles.commentCard}>
            <Text style={styles.commentLabel}>Comentario</Text>
            <Text style={styles.commentValue}>
              {item.comment || "Sin observaciones adicionales."}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen_bg,
  },
  content: {
    padding: 18,
    paddingBottom: 32,
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
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  metaChipText: {
    color: colors.text_secondary,
    fontSize: 13,
    fontWeight: "600",
  },
  summaryCard: {
    marginTop: 16,
    padding: 18,
    borderRadius: 22,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
    gap: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  summaryLabel: {
    color: colors.text_muted,
    fontSize: 14,
  },
  summaryValue: {
    color: colors.text_primary,
    fontSize: 14,
    fontWeight: "600",
    flexShrink: 1,
    textAlign: "right",
  },
  sectionHeader: {
    paddingHorizontal: 4,
  },
  sectionTitle: {
    color: colors.text_primary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  sectionSubtitle: {
    color: colors.text_secondary,
    lineHeight: 20,
  },
  answerCard: {
    padding: 18,
    borderRadius: 24,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  answerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  answerIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.accent_soft,
    alignItems: "center",
    justifyContent: "center",
  },
  answerTitle: {
    flex: 1,
    color: colors.text_primary,
    fontSize: 16,
    fontWeight: "700",
  },
  answerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    gap: 12,
  },
  answerLabel: {
    color: colors.text_muted,
    fontSize: 14,
  },
  answerValue: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: "700",
  },
  commentCard: {
    padding: 14,
    borderRadius: 18,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  commentLabel: {
    color: colors.text_muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  commentValue: {
    color: colors.text_secondary,
    lineHeight: 20,
  },
});

export default RecordDetails;
