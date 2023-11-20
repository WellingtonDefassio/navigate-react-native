import React from "react";
import { View, Text, ColorValue } from "react-native";


interface TextCentralProps {
  children: any;
  backgroundColor?: ColorValue;
  fontColor?: ColorValue;
}

export default function TextCentral(props: TextCentralProps) {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.backgroundColor ?? '#080707'
    }}>
      <Text style={{
        fontSize: 50,
        color: props.fontColor ?? '#F8F7F7'
      }}>{props.children}</Text>
    </View>
  );
}
