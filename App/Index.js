/** @format */

import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import React from "react";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconURL={icons.menu} dimeension="60%" />
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default Index;
