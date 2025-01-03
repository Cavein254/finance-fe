import Header from "@/components/header/Header";
import Home from "@/pages/Home";
import Stock from "@/pages/Stock";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View className="bg-gray-300 h-full">
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  );
}
