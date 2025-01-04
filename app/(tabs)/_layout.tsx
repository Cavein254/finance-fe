import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="stock" />
      <Tabs.Screen name="index" />
    </Tabs>
  );
};

export default TabsLayout;
