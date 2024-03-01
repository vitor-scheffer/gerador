import { Text, StyleSheet, View, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface Props {
  data: string;
  didTapDeletePassword: () => void;
}

export function PasswordCell({ data, didTapDeletePassword }: Props) {
  const rightSwipe = () => {
    return (
      <Pressable style={styles.swipeable} onPress={didTapDeletePassword}>
        <Ionicons color="red" size={24} name="trash-bin" />
      </Pressable>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.container}>
          <Text style={styles.title}>{data}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    color: "white",
    fontWeight: "600",
  },
  swipeable: {
    paddingHorizontal: 16,
    alignContent: "center",
    justifyContent: "center",
  },
});
