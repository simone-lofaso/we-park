import Constants from 'expo-constants';
import type { RootStackScreenProps, User } from '../types';
import { storeUser } from '../util';

const fetchConfig = (body: any) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
};

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
    fetchConfig(form)
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
    fetchConfig(form)
  );
  const data = await res.json();
  if (res.ok) {
    if (!isUser(data)) throw new Error('Data returned is not a User.');
    await storeUser(data);
    navigation.navigate('Home');
  }
};

export const doPark = async (
  user: User,
  navigation: RootStackScreenProps<any>['navigation']
) => {
  const { id, tokens } = user;
  // const { ok, json } = await fetch(`http://${
  //   Constants.expoConfig?.extra?.apiUrl || 'localhost'
  //   }:8000/api/v1/user/update-coins`, fetchConfig({ id, tokens }))
  // if (!ok) throw new Error((await json()).message);
  const res = await fetch(
    `http://${
      Constants.expoConfig?.extra?.apiUrl || 'localhost'
    }:8000/api/v1/parking/recommend`,
    fetchConfig({ id })
  );
  if (!res.ok) throw new Error((await res.json()).message);
  const { space: parkingSpace, name: garageName } = await res.json();
  navigation.navigate('Map', {
    parkingSpace,
    garageName,
  });
  return;
};

export const finishPark = async (
  id: number,
  spaceId: number,
  navigation: RootStackScreenProps<any>['navigation']
) => {
  const res = await fetch(
    `http://${
      Constants.expoConfig?.extra?.apiUrl || 'localhost'
    }:8000/api/v1/parking/parked`,
    fetchConfig({ id, spaceId })
  );
  if (res.ok) navigation.navigate('Home');
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
