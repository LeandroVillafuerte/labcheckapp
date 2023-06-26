import {
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import registers from "../utils/mockups/registers.js";
import ItemRecordList from "./ItemRecordList.jsx";

const RecordList = () => {
  return (
    <>
      <View style={styles.listHeader}>
        <Text style={styles.textHeaderId}>No</Text>
        <Text style={styles.textHeaderDate}>Fecha</Text>
        <Text style={styles.textHeaderName}>Nombre</Text>
      </View>
      <FlatList
        data={registers}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemRecordList item={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        //   onEndReached={isNext && laodMore}
        //   onEndReachedThreshold={0.1}
        // ListFooterComponent={
        //   //   isNext && (
        //   <ActivityIndicator
        //     size="large"
        //     // style={styles.spinner}
        //     color="#AEAEAE"
        //   />
        //   //   )
        // }
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    bottom: 30,
    top: 20,
  },
  listHeader: {
    flexDirection: "row",
    backgroundColor: "#AEAEAE",
    paddingHorizontal: 30,
    height: 30,
    alignItems: "center",
  },
  textHeaderId: {
    flex: 1,
    fontWeight: "bold",
  },
  textHeaderDate: {
    flex: 2,
    fontWeight: "bold",
  },
  textHeaderName: {
    flex: 3,
    fontWeight: "bold",
  },
});

export default RecordList;
