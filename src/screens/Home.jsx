import { View, SafeAreaView, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import React from "react";
import RecordList from "../components/RecordList";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <IconButton
          icon="plus"
          mode="contained"
          size={40}
          iconColor="#ffead6"
          containerColor="#232392"
          onPress={() => navigation.navigate("New Record")}
        />
      </View>
      <RecordList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: { position: "absolute", bottom: 50, right: 30, zIndex: 1 },
});

export default Home;
