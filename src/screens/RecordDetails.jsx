import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useCallback } from "react";
import { Avatar, Button, Card, Divider, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import record from "../utils/mockups/record";
import colors from "../utils/constants/colors";

const RecordDetails = (props) => {
  const {
    navigation,
    route: {
      params: { id },
    },
  } = props;
  navigation.setOptions({ title: `Registro #${record.id}` });
  return (
    <ScrollView>
      <Card style={styles.card} elevation={3}>
        <Card.Content style={styles.head}>
          <View style={styles.name}>
            <Text variant="titleLarge">Usuario: Bruce Wayne</Text>
          </View>
          <View style={styles.time}>
            <Text variant="bodySmall">Registro #{record.id}</Text>
            <Icon color={colors.light_1_color} name="clock">
              <Text variant="bodySmall">07:40hs, 11 May, 2023 </Text>
            </Icon>
          </View>
        </Card.Content>
        <Card.Content style={styles.list}>
          <View style={styles.items}>
            <Divider />
            <View style={{ padding: 5 }}>
              <Text variant="bodyLarge">Respuestas:</Text>
            </View>
            {record.form.map((item) => (
              <View key={"item" + item.id}>
                <View style={styles.listItemTitle}>
                  <Icon name="pen" color={colors.light_1_color} size={15} />
                  <View style={{ paddingLeft: 10 }}>
                    <Text variant="bodyLarge">
                      {item.title}:{" "}
                      <Text style={{ fontWeight: "bold" }}>{item.checked}</Text>
                      .
                    </Text>
                  </View>
                </View>
                <View style={styles.comment}>
                  <Text variant="bodyLarge">Comentario:</Text>
                  {(item.comment && (
                    <Text style={{ fontWeight: "bold" }}>
                      "{item.comment}".
                    </Text>
                  )) || <Text style={{ fontWeight: "bold" }}>-</Text>}
                </View>
              </View>
            ))}
            <Divider />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: { margin: 20 },
  time: { paddingVertical: 5 },
  items: { paddingVertical: 20 },
  head: { padding: 5, display: "flex", alignItems: "flex-end" },
  listItemTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  comment: { paddingHorizontal: 25 },
});
export default RecordDetails;
