import "../global.css";
import React from "react";
import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import client from "@/client";

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ApolloProvider>
  );
};

export default RootLayout;
