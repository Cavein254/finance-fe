import Header from "@/components/header/Header";
import Home from "@/pages/Home";
import Stock from "@/pages/Stock";
import { Link } from "expo-router";
import { Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Index() {
  const imageStr =
    "https://images.unsplash.com/photo-1729465184547-552c2840965d?q=40&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <View className="bg-gray-300 h-full">
      <SafeAreaView>
        <View>
          <View className="flex justify-center items-center">
            <Image
              source={{ uri: imageStr }}
              className="h-[150] w-[150] rounded-full p-1 border-4 border-green-300"
            />
            <View className="-mt-6 flex flex-row gap-2 items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-full">
              <FontAwesome6
                name="dot-circle"
                size={24}
                className="text-white"
              />
              <Text className="text-white">Pro</Text>
            </View>
            <View className="font-bold text-xl">Olivia Willision</View>
            <View>Email: olivia@oulook.com</View>
            <View className="text-sm">Date Joined: 12th Jan 2025</View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
