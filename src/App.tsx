import React from "react";
import { SafeAreaView } from "react-native";
import TextCentral from "./components/TextCentral";
import ScreenA from "./views/ScreenA";
import ScreenB from "./views/ScreenB";
import ScreenC from "./views/ScreenC";

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <ScreenA></ScreenA>
      <ScreenB></ScreenB>
      <ScreenC></ScreenC>
    </SafeAreaView>
  );
}
