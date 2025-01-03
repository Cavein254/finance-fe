import { View, Text, Pressable } from "react-native";
import React from "react";

interface TimeBtnProps {
  id: number;
  title: string;
  onPress: () => void;
}
const TimeBtn = ({ title, onPress }: TimeBtnProps) => {
  return (
    <Pressable
      className="p-2 border-2 border-gray-500 rounded-lg"
      onPress={onPress}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default TimeBtn;
