import { Pressable, ScrollView, Text, Touchable, View } from "react-native";
import React, { Component } from "react";
import { timeActionsData } from "./actions";
import TimeBtn from "./TimeBtn";
import MiddleChart from "./MiddleChart";
import Spacer from "../common/Spacer";

export class MiddleCard extends Component {
  render() {
    return (
      <ScrollView className="bg-white rounded-md shadow-sm p-2">
        <View>
          <Text className="text-gray-600 text-sm font-bold">
            Total Spending
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold">$ 1,400,513.23</Text>
          </View>
          <View className="flex flex-row gap-2 flex-wrap w-[50%] justify-center">
            {timeActionsData.map((action) => (
              <TimeBtn key={action.id} {...action} />
            ))}
          </View>
        </View>
        <Spacer size={2} />
        <MiddleChart />
      </ScrollView>
    );
  }
}

export default MiddleCard;
