import { View, Button, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import RecordList from "../components/RecordList";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => navigation.navigate("New Record")} />
      </View>
      <RecordList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: { position: "absolute", bottom: 50, right: 30, zIndex: 1 },
});

export default Home;
