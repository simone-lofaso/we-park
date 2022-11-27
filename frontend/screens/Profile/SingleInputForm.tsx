import { Button } from '@rneui/themed';
import Constants from 'expo-constants';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from '../../components';
import { RootStackScreenProps } from '../../types';
import { getUser, storeUser } from '../../util';

type AddPlateFormProps = {
  type: 'AddPlate' | 'ChangeEmail' | 'ChangePassword';
  navigation: RootStackScreenProps<'Profile'>['navigation'];
};

export default function SingleInputForm({
  type,
  navigation,
}: AddPlateFormProps) {
  const [input, setInput] = useState('');
  const [err, setErr] = useState('');
  const { suffix, key, placeHolder } = (() => {
    if (type === 'AddPlate')
      return {
        suffix: 'add-plate',
        key: 'plateNum',
        placeHolder: 'Add License Plate',
      };
    if (type === 'ChangeEmail')
      return { suffix: 'change-email', key: 'email', placeHolder: 'New Email' };
    if (type === 'ChangePassword')
      return {
        suffix: 'change-password',
        key: 'password',
        placeHolder: 'New Email',
      };
    throw new Error('Type not defined.');
  })();

  const handleSubmit = async () => {
    try {
      if (!input) return;
      const res = await fetch(
        `http://${
          Constants.expoConfig?.extra?.apiUrl || 'localhost'
        }:8000/api/v1/user/${suffix}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            [key]: input,
            id: (await getUser())?.id,
          }),
        }
      );
      if (res.ok) {
        if (type === 'ChangeEmail') {
          const user = await getUser();
          if (!user) throw new Error('No User!');
          user.email = input;
          await storeUser(user);
        }
        navigation.navigate('Home');
      }
    } catch (e) {
      setErr(String(e));
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder={placeHolder} onChangeText={(e) => setInput(e)} />
      <Button title='Submit' onPress={handleSubmit} />
      <Text>{err}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
