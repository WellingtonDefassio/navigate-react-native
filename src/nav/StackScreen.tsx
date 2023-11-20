import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";
import FlowStack from "../components/FlowStack";

const Stack = createNativeStackNavigator();


export default function StackScreen(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"ScreenA"}>{dataProps => <FlowStack next={"ScreenB"}  {...dataProps}><ScreenA/></FlowStack>}</Stack.Screen>
      <Stack.Screen name={"ScreenB"}>{dataProps => <FlowStack next={"ScreenC"} back {...dataProps}><ScreenB/></FlowStack>}</Stack.Screen>
      <Stack.Screen name={"ScreenC"}>{dataProps => <FlowStack next={"ScreenA"} back {...dataProps}><ScreenC/></FlowStack>}</Stack.Screen>
    </Stack.Navigator>
  );
}
