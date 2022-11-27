import { Button } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from '../../components';
import { green } from '../../constants/Colors';
import { height, width } from '../../constants/Dimensions';
import { RootStackScreenProps, User } from '../../types';
import { deleteUser, getUser } from '../../util';
import SingleInputForm from './SingleInputForm';
import Constants from 'expo-constants';

export default function Profile({
  navigation,
}: RootStackScreenProps<'Profile'>) {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (!user) {
        navigation.navigate('Login');
        return;
      }
      setUser(user);
    })();
  }, []);

  const doDelete = async () => {
    if (!user) return;
    const res = await fetch(
      `http://${
        Constants.expoConfig?.extra?.apiUrl || 'localhost'
      }:8000/api/v1/user/delete`,
      {
        method: 'POST',
        body: JSON.stringify({ id: user.id }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (res.ok) {
      await deleteUser();
      navigation.navigate('Register');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{user?.email}</Text>
      <SingleInputForm type='AddPlate' navigation={navigation} />
      <SingleInputForm type='ChangeEmail' navigation={navigation} />
      <SingleInputForm type='ChangePassword' navigation={navigation} />
      <Button
        title='Sign Out'
        onPress={async () => {
          await deleteUser();
          navigation.navigate('Login');
        }}
      />
      <Button title='Delete Account' onPress={doDelete} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: green,
    display: 'flex',
    height: height,
    width: width,
  },
});
