import { View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const SearchCmp = () => {
  return (
    <View>
      <input
        type="text"
        placeholder="Search..."
        className="pl-8 py-2 text-2xl font-bold"
      />
      <Pressable className="absolute  mt-2">
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default SearchCmp;
