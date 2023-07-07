import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import colors from "../utils/constants/colors";

const ItemRecordList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => navigation.navigate("Record Card", { id: item.id })}
    >
      <View style={styles.card}>
        <View style={styles.id}>
          <Text>#{item.id}</Text>
        </View>
        <View style={styles.date}>
          <Text>{item.time} hs</Text>
          <Text>{item.date}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
    top: 20,
  },
  card: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.medium_2_color,
    borderRadius: 10,
  },
  id: { flex: 1 },
  date: { flex: 2 },
  name: { flex: 3 },
  nameText: { fontSize: 20 },
});

export default ItemRecordList;
