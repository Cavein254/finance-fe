import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const actionsData = [
  {
    id: 1,
    icon: <MaterialIcons name="move-up" size={24} color="black" />,
    title: "Transfer",
    onPress: () => console.log("Transfer"),
  },
  {
    id: 2,
    icon: <MaterialIcons name="save-alt" size={24} color="black" />,
    title: "Top Up",
    onPress: () => console.log("Transfer"),
  },
  {
    id: 3,
    icon: <FontAwesome6 name="money-bill-transfer" size={24} color="black" />,
    title: "Withdraw",
    onPress: () => console.log("Transfer"),
  },
];

export const timeActionsData = [
  {
    id: 1,
    title: "Today",
    onPress: () => console.log("Today"),
  },
  {
    id: 2,
    title: "1Week",
    onPress: () => console.log("Today"),
  },
  {
    id: 3,
    title: "1mon",
    onPress: () => console.log("Today"),
  },
  {
    id: 4,
    title: "6Mon",
    onPress: () => console.log("Today"),
  },
  {
    id: 5,
    title: "1year",
    onPress: () => console.log("Today"),
  },
  {
    id: 6,
    title: "max",
    onPress: () => console.log("Today"),
  },
];
