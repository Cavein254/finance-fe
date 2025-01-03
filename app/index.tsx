import SearchCmp from "@/components/common/SearchCmp";
import Spacer from "@/components/common/Spacer";
import Header from "@/components/header/Header";
import StockList from "@/components/stock/StockList";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Header />
      <SearchCmp />
      <Spacer />
      <StockList />
    </View>
  );
}
