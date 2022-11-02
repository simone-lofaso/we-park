import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { RootStackScreenProps } from '../types';
import NorthGarage from '../assets/images/north-garage.jpg';
import { useState } from 'react';
import Constants from 'expo-constants';

type FormState = {
  email: string;
  password: string;
};

export default function Register({
  navigation,
}: RootStackScreenProps<'Register'>) {
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      // TODO: Store session on phone
      const res = await fetch(
        `http://${
          Constants.expoConfig?.extra?.apiUrl || 'localhost'
        }:8000/api/v1/user/register`,
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
        navigation.navigate('Home');
      } else {
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={NorthGarage} style={styles.picture}>
        <Text style={styles.register}>Register</Text>
        <Input
          placeholder='Email'
          onChangeText={(e) => setForm({ ...form, email: e })}
          inputStyle={styles.input}
          placeholderTextColor='white'
        />
        <Input
          placeholder='Password'
          onChangeText={(e) => setForm({ ...form, password: e })}
          inputStyle={styles.input}
          placeholderTextColor='white'
        />
        <Button title='Submit' onPress={handleSubmit} />
        <Button
          title='Go to Login'
          onPress={async () => {
            navigation.navigate('Login');
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
    width: '100%',
  },
  picture: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  register: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    color: 'white',
  },
});
