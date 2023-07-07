import { View, SafeAreaView, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import React from "react";
import RecordList from "../components/RecordList";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/constants/colors";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <RecordList />
      <View style={styles.buttonContainer}>
        <IconButton
          icon="plus"
          mode="contained"
          size={40}
          iconColor={colors.light_3_color}
          containerColor="#232392"
          onPress={() => navigation.navigate("New Record")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: { position: "absolute", bottom: 50, right: 30, zIndex: 1 },
});

export default Home;
