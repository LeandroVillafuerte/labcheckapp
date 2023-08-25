import React, { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const useWithHeader = () => {
  // const navigation = useNavigation();
  // return useFocusEffect(
  //   useCallback(() => {
  //     navigation.getParent().setOptions({ headerShown: true });
  //     return () => {
  //       navigation.getParent().setOptions({ headerShown: false });
  //     };
  //   }, [])
  // );
};

export default useWithHeader;
