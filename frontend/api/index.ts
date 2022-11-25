import Constants from 'expo-constants';
import type { RootStackScreenProps, User } from '../types';
import { storeUser } from '../util';

const isUser = (obj: any): obj is User => {
  return ['id', 'email', 'tokens', 'plates', 'parkedSpaceId'].every(
    (s) => s in obj
  );
};

/**
 * Makes a POST request to the backend, then navigates to Home on successful registration.
 */
export const doRegister = async (
  form: { email: string; password: string },
  navigation: RootStackScreenProps<'Register'>['navigation']
) => {
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
  if (res.ok) {
    const data = await res.json();
    if (!isUser(data)) throw new Error('Data returned is not a User.');
    await storeUser(data);
    navigation.navigate('Home');
  } else handleCodes(res.status);
};

/**
 * Makes a POST request to the backend, then navigates to Home on successful login.
 */
export const doLogin = async (
  form: { email: string; password: string },
  navigation: RootStackScreenProps<'Login'>['navigation']
) => {
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
  const data = await res.json();
  if (res.ok) {
    if (!isUser(data)) throw new Error('Data returned is not a User.');
    await storeUser(data);
    navigation.navigate('Home');
  }
};

/**
 * Throws the appropriate error based on the status code
 */
const handleCodes = (code: number) => {
  if (code === 409) {
    throw new Error(
      'That email already exists! Please try logging in instead.'
    );
  }
  throw new Error('Unknown server error!');
};
