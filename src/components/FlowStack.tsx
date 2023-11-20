import React from "react";
import { Button, View } from "react-native";


interface FlowStackProps {
  children: any;
  next?: string;
  back?: boolean;
  navigation: any;
  nextParam?: any;
}

export default function FlowStack(props: FlowStackProps) {
  console.log('log props', props);
  return (
    <View style={{ flex: 1 }}>
        <View style={{flexDirection: 'row',  alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            {props.back ? <Button title={"back"} onPress={() => props.navigation.goBack()} /> : false}
            {props.next ? <Button title={"next"} onPress={() => props.navigation.navigate(props.next, {number: parseInt(`${Math.random() * 100}`)})} /> : false}
        </View>
      <View style={{ flex: 1 }}>
        {props.children}
      </View>
    </View>
  );
}
