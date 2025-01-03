import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../common/Spacer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  return (
    <View className="flex flex-col">
      <View className="flex flex-row  justify-between items-center p-4">
        <View>
          <Pressable className="p-2 rounded-full bg-gray-500">
            <Ionicons name="reorder-three" size={24} color="black" />
          </Pressable>
        </View>
        <View>
          <Text className="text-3xl font-bold">Home</Text>
        </View>
        <View>
          <Pressable className="p-2 rounded-full bg-gray-500">
            <FontAwesome5 name="bell" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <Spacer />
    </View>
  );
};

export default Header;
