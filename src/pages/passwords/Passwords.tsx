import { View, FlatList, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useStorage } from "../../hooks";
import { PasswordCell } from ".";

export function Passwords() {
  const { getItem, deleteItem } = useStorage();
  const [listPasswords, setListPasswords] = useState<Array<string> | undefined>(
    undefined
  );
  const focused = useIsFocused();

  const didPressDeletePassword = async (item: string) => {
    const passwords = await deleteItem("@pass", item);
    alert("Senha removida com sucesso!");
    setListPasswords(passwords);
  };

  useEffect(() => {
    async function getData() {
      const passwords = await getItem("@pass");

      setListPasswords(passwords);
    }

    getData();
  }, [focused]);

  return (
    <View>
      <Header title="Minhas Senhas" />
      <FlatList
      style={styles.list}
        data={listPasswords}
        keyExtractor={(item: string) => String(item)}
        renderItem={({ item }) => (
          <PasswordCell
            data={item}
            didTapDeletePassword={() => didPressDeletePassword(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 20,
  }
});
