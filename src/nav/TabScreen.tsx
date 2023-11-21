import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Tab = createBottomTabNavigator();


export default function TabScreen(props: any) {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'blue', tabBarLabelStyle: {fontSize: 30} }} name={"ScreenA"} component={ScreenA}></Tab.Screen>
      <Tab.Screen options={{tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'blue', tabBarLabelStyle: {fontSize: 30} }} name={"ScreenB"} component={ScreenB}></Tab.Screen>
      <Tab.Screen options={{tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'blue', tabBarLabelStyle: {fontSize: 30} }} name={"ScreenC"} component={ScreenC}></Tab.Screen>
    </Tab.Navigator>
  );
}
