import { View, Text, Platform } from "react-native";
import React from "react";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const TabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  const { buildHref } = useLinkBuilder();
  const icons: Record<string, (props: any) => JSX.Element> = {
    home: (props: any) => (
      <AntDesign name="home" size={24} className="text-gray-600" {...props} />
    ),
    stock: (props: any) => (
      <AntDesign
        name="linechart"
        size={24}
        className="text-gray-600"
        {...props}
      />
    ),
    profile: (props: any) => (
      <AntDesign name="user" size={24} className="text-gray-600" {...props} />
    ),
  };
  return (
    <View className="absolute bottom-5  w-full  flex flex-row p-2">
      <View className="bg-white flex flex-row justify-between items-center w-full p-4 rounded-full shadow-md">
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              href={buildHref(route.name, route.params)}
              key={route.name}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              {icons[route.name]
                ? icons[route.name]({ color: isFocused ? "blue" : "" })
                : null}
              <Text
                className={`${isFocused ? "text-blue-600" : "text-gray-400"}`}
              >
                {label}
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
