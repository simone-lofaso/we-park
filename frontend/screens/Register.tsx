import { ImageBackground, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Input, Submit } from '../components';
import { RootStackScreenProps } from '../types';
import NorthGarage from '../assets/images/north-garage.jpg';
import { useState } from 'react';

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

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={NorthGarage} style={styles.picture}>
        <Text style={styles.register}>Register</Text>
        <Input
          placeholder='email'
          onChangeText={(e) => setForm({ ...form, email: e })}
        />
        <Input
          placeholder='password'
          onChangeText={(e) => setForm({ ...form, password: e })}
        />
        <Submit />
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
});
