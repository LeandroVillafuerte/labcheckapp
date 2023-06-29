import React, { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const useWithoutHeader = () => {
  const navigation = useNavigation();
  return useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({ headerShown: false });
      return () => {
        navigation.getParent().setOptions({ headerShown: true });
      };
    }, [])
  );
};

export default useWithoutHeader;
