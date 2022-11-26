import { Button, Input } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { RootStackScreenProps } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteUser } from '../util';

export default function Profile({
  navigation,
}: RootStackScreenProps<'Profile'>) {
  const [plateNum, setPlateNum] = useState({ plateNum: '' });

  const handleSubmit = async () => {
    try {
      if (!plateNum.plateNum) return;
      const res = await fetch(
        `http://${
          Constants.expoConfig?.extra?.apiUrl || 'localhost'
        }:8000/api/v1/user/add-plate`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...plateNum,
            userId: await AsyncStorage.getItem('userId'),
          }),
        }
      );
      if (res.ok) {
        navigation.navigate('Home');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder='Add License Plate'
        onChangeText={(e) => setPlateNum({ plateNum: e })}
      />
      <Button title='Add Plate' onPress={handleSubmit} />
      <Button
        title='Sign Out'
        onPress={async () => {
          await deleteUser();
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});
