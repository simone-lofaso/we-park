import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
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
        <Button
          title='Submit'
          onPress={async () => {
            try {
              console.log(form);
              const res = await fetch(
                'http://172.20.10.3:8000/api/v1/user/register',
                {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(form),
                }
              );
            } catch (e) {
              console.error(e);
            }
            //console.log(res.status);
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
