import { View, StyleSheet } from "react-native";
import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "../../modules/victorycharts/charts";
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];
const MiddleChart = () => {
  return (
    <View className="h-[300px] flex justify-center">
      <VictoryChart width={350} theme={VictoryTheme.clean}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </View>
  );
};

export default MiddleChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
