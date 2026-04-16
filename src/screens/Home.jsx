import { SafeAreaView, StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import React from "react";
import RecordList from "../components/RecordList";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/constants/colors";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.heroCard}>
          <Text style={styles.eyebrow}>Panel diario</Text>
          <Text variant="headlineSmall" style={styles.title}>
            Registros de control
          </Text>
          <Text style={styles.subtitle}>
            Revisa el historial reciente y crea nuevos controles con un flujo
            mas claro y ordenado.
          </Text>
        </View>

        <View style={styles.listShell}>
          <RecordList />
        </View>
      </View>

      <FAB
        icon="plus"
        label="Nuevo registro"
        style={styles.fab}
        color={colors.bg_1_color}
        customSize={58}
        onPress={() => navigation.navigate("New Record")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screen_bg,
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  heroCard: {
    padding: 22,
    borderRadius: 28,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
    marginBottom: 16,
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
  listShell: {
    flex: 1,
    borderRadius: 28,
    backgroundColor: colors.surface_1,
    borderWidth: 1,
    borderColor: colors.border_soft,
    paddingTop: 18,
    paddingBottom: 6,
    overflow: "hidden",
  },
  fab: {
    position: "absolute",
    right: 24,
    bottom: 28,
    backgroundColor: colors.accent,
  },
});

export default Home;
