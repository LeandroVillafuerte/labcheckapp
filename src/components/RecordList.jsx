import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import records from "../utils/mockups/records.js";
import ItemRecordList from "./ItemRecordList.jsx";
import colors from "../utils/constants/colors.js";

const RecordList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.headerId}>No</Text>
        <Text style={styles.headerDate}>Fecha</Text>
        <Text style={styles.headerName}>Responsable</Text>
      </View>

      <FlatList
        data={records}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemRecordList item={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
    backgroundColor: colors.surface_2,
    borderWidth: 1,
    borderColor: colors.border_soft,
  },
  headerId: {
    flex: 1,
    color: colors.text_muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  headerDate: {
    flex: 2,
    color: colors.text_muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  headerName: {
    flex: 3,
    color: colors.text_muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  listContent: {
    paddingHorizontal: 18,
    paddingBottom: 96,
    gap: 12,
  },
});

export default RecordList;
