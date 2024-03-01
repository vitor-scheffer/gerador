import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused)
              return <Ionicons color={color} size={size} name="home" />;
            return <Ionicons color={color} size={size} name="home-outline" />;
          },
        }}
      />
      <Screen
        name="Passwords"
        component={Passwords}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused)
              return <Ionicons color={color} size={size} name="lock-closed" />;
            return (
              <Ionicons color={color} size={size} name="lock-closed-outline" />
            );
          },
        }}
      />
    </Navigator>
  );
}
