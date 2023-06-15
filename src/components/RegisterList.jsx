import { FlatList, ActivityIndicator } from "react-native";
import React from "react";
import registers from "../utils/mockups/registers.js";
import ItemRegisterList from "./ItemRegisterList.jsx";

const RegisterList = () => {
  return (
    <FlatList
      data={registers}
      // numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemRegisterList item={item} />}
      // contentContainerStyle={styles.flatListContentContainer}
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
  );
};

export default RegisterList;
