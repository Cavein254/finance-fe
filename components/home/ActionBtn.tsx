/**
 * ActionBtn component
 *
 * This component contains buttons to perform actions
 * on user's account. These actions include withdraw, deposit,
 * and transfer
 *
 * @component
 * @param {string} id - A unique identifier for the action.
 * @param {React.ReactNode} icon - The icon to be displayed on the button.
 * @param {string} title - The title of the action.
 * @param {() => void} onPress - The function to be called when the button is pressed.
 */

import { View, Text, Pressable } from "react-native";
import React from "react";

interface ActionBtnProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
}
const ActionBtn = ({ id, icon, title, onPress }: ActionBtnProps) => {
  return (
    <View className="flex flex-col items-center">
      <Pressable
        className="py-4 px-8 rounded-full bg-gray-400 hover:bg-gray-600"
        onPress={onPress}
      >
        {icon}
      </Pressable>
      <Text className="text-gray-600 text-sm font-bold">{title}</Text>
    </View>
  );
};

export default ActionBtn;
