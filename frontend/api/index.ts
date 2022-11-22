import Constants from 'expo-constants';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Makes a POST request to the backend, then navigates to Home on successful registration.
 */
export const doRegister = async (
  form: { email: string; password: string },
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Register',
    undefined
  >
) => {
  try {
    const res = await fetch(
      `http://${
        Constants.expoConfig?.extra?.apiUrl || 'localhost'
      }:8000/api/v1/user/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }
    );
    const data = await res.json();
    if (res.ok) {
      await AsyncStorage.setItem('user', JSON.stringify(data));
      navigation.navigate('Home');
    } else throw new Error(data.message);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/**
 * Makes a POST request to the backend, then navigates to Home on successful login.
 */
export const doLogin = async (
  form: { email: string; password: string },
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Login',
    undefined
  >) => {
  const res = await fetch(
    `http://${
      Constants.expoConfig?.extra?.apiUrl || 'localhost'
    }:8000/api/v1/user/login`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }
  );
  if (res.ok) {
    // TODO: Store session on phone
    navigation.navigate('Home');
  }
};
