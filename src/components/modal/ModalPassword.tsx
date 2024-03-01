import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as ClipBoard from "expo-clipboard";
import React from "react";
import { useStorage } from "../../hooks";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  password: string | undefined;
  didTapBtnBack: () => void;
}

export function ModalPassword({ password, didTapBtnBack }: Props) {
  const { saveItem } = useStorage();

  const didPressCopyPassword = async () => {
    if (!password) return;

    await ClipBoard.setStringAsync(password);
    alert("Sua senha foi copiada.");
  };

  const didTapBtnSave = async () => {
    if (!password) return;

    await saveItem("@pass", password);
    alert("Senha salva com sucesso!");
    didTapBtnBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>
        <Pressable
          style={styles.innerPassword}
          onLongPress={didPressCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
          <Ionicons color="white" size={24} name="clipboard-outline" />
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.buttonBack} onPress={didTapBtnBack}>
            <Text style={styles.btnBackText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSave} onPress={didTapBtnSave}>
            <Text style={styles.btnSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(24, 24, 24, 0.8)",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    width: "90%",
    borderRadius: 8,
    paddingVertical: 50,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
  innerPassword: {
    backgroundColor: "black",
    width: "80%",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    gap: 5,
    marginTop: 16,
  },
  buttonSave: {
    flex: 1,
    backgroundColor: "#392DE9",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonBack: {
    flex: 1,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  btnBackText: {
    fontWeight: "700",
  },
  btnSaveText: {
    fontWeight: "700",
    color: "#ffff",
  },
});
