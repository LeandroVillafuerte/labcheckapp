import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useCallback } from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import useWithoutHeader from "../hooks/useWithoutHeader";
import Icon from "react-native-vector-icons/FontAwesome5";

const RecordDetails = (props) => {
  const {
    navigation,
    route: {
      params: { id },
    },
  } = props;

  useWithoutHeader();
  return (
    <ScrollView>
      <Card>
        <Card.Content style={{ padding: 5 }}>
          <Text variant="headlineSmall">Registro #{id}</Text>
        </Card.Content>
        <Card.Content style={styles.head}>
          <View style={styles.name}>
            <Text variant="titleLarge">Usuario: Bruce Wayne</Text>
          </View>
          <View style={styles.time}>
            <Icon name="clock">07:40hs, 11 May, 2023</Icon>
          </View>
        </Card.Content>
        <Card.Content style={styles.list}>
          <ScrollView style={styles.items}>
            <View style={styles.listItemTitle}>
              <Icon name="pen" size={15} />
              <View style={{ paddingLeft: 10 }}>
                <Text variant="bodyLarge">EQUISDE</Text>
              </View>
            </View>
            <View>
              <View>
                <Text variant="bodyMedium">EQUISDE</Text>
              </View>
            </View>
          </ScrollView>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  time: { paddingVertical: 5 },
  items: { paddingVertical: 20 },
  head: { padding: 5, display: "flex", alignItems: "flex-end" },
  listItemTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default RecordDetails;
