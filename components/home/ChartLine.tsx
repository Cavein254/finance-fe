import { View, Text } from "react-native";
import React from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "../../modules/victorycharts/charts";
import { GET_TIME_SERIES_DAILY } from "@/graphql/query/stock";
import { useQuery } from "@apollo/client";

interface StockData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

const ChartLine = () => {
  const { data, loading } = useQuery(GET_TIME_SERIES_DAILY, {
    variables: {
      symbol: "AAPL",
    },
  });
  const stockData: StockData[] = data?.getTimeSeriesDaily?.data;
  const chartData = stockData.slice(0, 30).map((item) => ({
    x: item.date,
    y: parseFloat(item.close),
  }));

  return (
    <View>
      <VictoryChart scale={{ x: "time" }}>
        <VictoryAxis
          tickFormat={(t) => {
            const date = new Date(t);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
          }}
          style={{
            tickLabels: { angle: -45, textAnchor: "end", fontSize: 4 },
          }}
        />
        <VictoryAxis dependentAxis tickFormat={(t) => `$${t.toFixed(2)}`} />
        <VictoryLine data={chartData} />
      </VictoryChart>
    </View>
  );
};

export default ChartLine;
