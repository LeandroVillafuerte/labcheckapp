import {
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import records from "../utils/mockups/records.js";
import ItemRecordList from "./ItemRecordList.jsx";
import colors from "../utils/constants/colors.js";

const RecordList = () => {
  return (
    <>
      <View style={styles.listHeader}>
        <Text style={styles.textHeaderId}>No</Text>
        <Text style={styles.textHeaderDate}>Fecha</Text>
        <Text style={styles.textHeaderName}>Nombre</Text>
      </View>
      <FlatList
        data={records}
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
    top: 20,
    paddingBottom: 70,
  },
  listHeader: {
    flexDirection: "row",
    backgroundColor: colors.medium_2_color,
    paddingHorizontal: 30,
    height: 30,
    alignItems: "center",
    borderBottomWidth: 1,
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
