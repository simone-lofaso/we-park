import { Button, Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { doRegister } from '../api';
import NorthGarage from '../assets/images/north-garage.jpg';
import { RootStackScreenProps } from '../types';

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
        <Button title='Submit' onPress={() => doRegister(form, navigation)} />
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
