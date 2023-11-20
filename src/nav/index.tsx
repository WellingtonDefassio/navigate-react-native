import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabScreen from "./TabScreen";
import StackScreen from "./StackScreen";

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
       <NavigationContainer>
         <TabScreen></TabScreen>
       </NavigationContainer>
    </SafeAreaView>
  );
}
