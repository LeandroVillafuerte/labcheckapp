import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native-paper";
import colors from "../utils/constants/colors";

const ItemRecordList = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={() => navigation.navigate("Record Card", { id: item.id })}
    >
      <View style={styles.idWrap}>
        <Text style={styles.idText}>#{item.id}</Text>
      </View>

      <View style={styles.dateWrap}>
        <Text style={styles.timeText}>{item.time} hs</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>

      <View style={styles.nameWrap}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.caption}>Abrir detalle</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 20,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  cardPressed: {
    opacity: 0.86,
  },
  idWrap: {
    flex: 1,
  },
  idText: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: "700",
  },
  dateWrap: {
    flex: 2,
    paddingRight: 8,
  },
  timeText: {
    color: colors.text_primary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  dateText: {
    color: colors.text_muted,
    fontSize: 12,
  },
  nameWrap: {
    flex: 3,
  },
  nameText: {
    color: colors.text_primary,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  caption: {
    color: colors.text_muted,
    fontSize: 12,
  },
});

export default ItemRecordList;
