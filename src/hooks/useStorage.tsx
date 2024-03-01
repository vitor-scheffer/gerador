import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = () => {
  const getItem = async (key: string) => {
    try {
      const passwords: string | null = await AsyncStorage.getItem(key);
      if (passwords) return JSON.parse(passwords);
      return [];
    } catch (error) {
      alert(error);
      return [];
    }
  };

  const saveItem = async (key: string, value: string) => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      alert(error);
    }
  };

  const deleteItem = async (key: string, value: string) => {
    try {
      let passwords = await getItem(key);
      let myPassword = passwords.filter((password: string) => {
        return password !== value;
      });
      await AsyncStorage.setItem(key, JSON.stringify(myPassword));
      return myPassword;
    } catch (error) {
      alert(error);
    }
  };

  return { getItem, saveItem, deleteItem };
};
