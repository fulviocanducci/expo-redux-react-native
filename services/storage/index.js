import { AsyncStorage } from 'react-native';

async function getStorage(key) {
  try {
    return JSON.parse(await AsyncStorage.getItem(key));
  } catch (error) {
    throw error;
  }
}

async function setStorage(key, value) {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw error;
  }
}

async function delStorage(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw error;
  }
}

export { getStorage, setStorage, delStorage };
