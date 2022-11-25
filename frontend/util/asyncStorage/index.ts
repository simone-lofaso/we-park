import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../types';

export const getUser = async (): Promise<User | null> => {
  const userString = await AsyncStorage.getItem('user');
  return userString ? JSON.parse(userString) : null;
};

export const storeUser = async (user: User) => {
  return AsyncStorage.setItem('user', JSON.stringify(user));
};

export const deleteUser = async () => {
  return AsyncStorage.removeItem('user');
};
