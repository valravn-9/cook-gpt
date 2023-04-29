import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const setValue = async (value: T) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      setStoredValue(value);
    } catch (e) {
      console.log(e);
    }
  };

  const getValue = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      jsonValue ? setStoredValue(JSON.parse(jsonValue)) : void 0;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  return [storedValue, setValue];
};

export default useLocalStorage;
