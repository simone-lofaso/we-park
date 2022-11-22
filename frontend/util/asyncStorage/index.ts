import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserFromStorage = async () => {
  return await AsyncStorage.getItem('user');
};
