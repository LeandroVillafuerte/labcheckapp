import { View, SafeAreaView, StyleSheet } from "react-native";
import { IconButton, FAB } from "react-native-paper";
import React from "react";
import RecordList from "../components/RecordList";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/constants/colors";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <RecordList />
      <View>
        <FAB
          icon={"plus"}
          onPress={() => navigation.navigate("New Record")}
          style={styles.fabStyle}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonContainer: { position: "absolute", bottom: 50, right: 30, zIndex: 1 },
  fabStyle: {
    bottom: 40,
    right: 30,
    position: "absolute",
  },
});

export default Home;
