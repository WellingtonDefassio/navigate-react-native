import React from "react";
import TextCentral from "../components/TextCentral";
import { Button, View } from "react-native";

export default function ScreenD(props: any) {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button
            title={'Open'}
            onPress={() => props.navigation.openDrawer()}
          />
      </View>
      <View style={{ flex: 1 }}>
        <TextCentral backgroundColor={"#33fa72"} fontColor={"#000"}>Screen D</TextCentral>
      </View>
    </View>

  );
}
