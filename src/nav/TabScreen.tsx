import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();


export default function TabScreen(props: any) {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'ios-information-circle';

        switch (route.name) {
          case 'ScreenA':
            iconName = focused
              ? 'heart-half'
              : 'heart-half-outline';
            break;
          case 'ScreenB':
            iconName = focused
              ? 'happy'
              : 'happy-outline';
            break;
          case 'ScreenC':
            iconName = focused ? 'hardware-chip' : 'hardware-chip-outline';
            break;
        }
        // You can return any component that you like here!
        console.log(iconName);
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen options={{tabBarActiveTintColor: 'red', tabBarShowLabel: false, tabBarInactiveTintColor: 'blue' }} name={"ScreenA"} component={ScreenA}></Tab.Screen>
      <Tab.Screen options={{tabBarActiveTintColor: 'red',tabBarShowLabel: false, tabBarInactiveTintColor: 'blue'}} name={"ScreenB"} component={ScreenB}></Tab.Screen>
      <Tab.Screen options={{tabBarActiveTintColor: 'red',tabBarShowLabel: false, tabBarInactiveTintColor: 'blue'}} name={"ScreenC"} component={ScreenC}></Tab.Screen>
    </Tab.Navigator>
  );
}
