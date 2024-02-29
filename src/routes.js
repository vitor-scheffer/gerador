import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Passwords"
        component={Passwords}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
