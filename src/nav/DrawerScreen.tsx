import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Drawer = createDrawerNavigator();


export default function DrawerScreen(props: any) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={"ScreenA"} component={ScreenA}></Drawer.Screen>
      <Drawer.Screen name={"ScreenB"} component={ScreenB}></Drawer.Screen>
      <Drawer.Screen name={"ScreenC"} component={ScreenC}></Drawer.Screen>
    </Drawer.Navigator>
  );
}