/**
 * StockItem component
 *
 * This component displays information about a single stock stock
 *
 * @component
 * @param {string} props - The stock information
 *
 */

import { View, Text } from "react-native";
import React from "react";

const StockItem = () => {
  return (
    <View className="flex flex-row justify-between items-center px-4 py-2 rounded-md bg-white shadow-md active:border-2 active:border-green-500">
      <View>
        <Text className="font-bold text-3xl uppercase">DOW J</Text>
        <Text className="text-xs font-bold text-gray-600">
          Down Jones Industrial
        </Text>
      </View>
      <View className="flex-1"></View>
      <View className="flex items-end">
        <Text className="font-bold text-3xl">34,382.13</Text>
        <Text className="text-xs font-bold text-green-600">+0.44%</Text>
      </View>
    </View>
  );
};

export default StockItem;
