import { getDailyData } from "@/utils/helpers";
import React from "react";

const Landing = () => {
  const [stockData, setStockData] = React.useState(null);
  React.useEffect(() => {
    getDailyData("AAPL").then((data) => {
      console.log(data);
    });
  }, []);
  return <div>Landing</div>;
};

export default Landing;
