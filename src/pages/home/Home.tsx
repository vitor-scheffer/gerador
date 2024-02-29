import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassword } from "../../components/modal";
import React from "react";

export function Home() {
  const [size, setSize] = useState<number>(6);
  const [password, setPassowrd] = useState<string | undefined>(undefined);

  const charset: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const didTapGeneratePassword = () => {
    let result = "";
    const charsetLength = charset.length;

    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * charsetLength);
      result += charset[randomIndex];
    }

    setPassowrd(result);
  };

  const didTapBtnBack = () => {
    setPassowrd(undefined);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          minimumValue={6}
          maximumValue={18}
          onValueChange={(value: number) => setSize(Math.round(value))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={didTapGeneratePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal
        visible={password != undefined}
        transparent={true}
        animationType="fade"
      >
        <ModalPassword password={password} didTapBtnBack={didTapBtnBack} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  area: {
    backgroundColor: "#ffff",
    padding: 8,
    width: "80%",
    borderRadius: 8,
    marginVertical: 16,
  },
  button: {
    width: "80%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#392DE9",
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "700",
    fontSize: 16,
  },
});
