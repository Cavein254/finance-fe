import { View, Text, Pressable } from "react-native";
import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdMoveUp } from "react-icons/md";
import Spacer from "../common/Spacer";
import { actionsData } from "./actions";
import ActionBtn from "./ActionBtn";

const TopCard = () => {
  const [see, setSee] = React.useState(false);
  return (
    <View className="bg-white rounded-md shadow-sm p-2">
      <View>
        <Text className="text-gray-600 text-sm font-bold">Total Balances</Text>
      </View>
      <View className="flex flex-row justify-between items-center">
        <View>
          {see ? (
            <Text className="text-3xl font-bold">****</Text>
          ) : (
            <Text className="text-3xl font-bold">$ 1,400,513.23</Text>
          )}
        </View>
        <View>
          {see ? (
            <Pressable
              onPress={() => setSee(false)}
              className=" p-2 border-2 border-gray-500 rounded-full"
            >
              <IoMdEye size={24} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setSee(true)}
              className=" p-2 border-2 border-gray-500 rounded-full"
            >
              <IoMdEyeOff />
            </Pressable>
          )}
        </View>
      </View>
      <Spacer size={2} />
      <View className="flex flex-row justify-between items-center">
        {actionsData.map((action) => (
          <ActionBtn key={action.id} {...action} />
        ))}
      </View>
    </View>
  );
};

export default TopCard;
