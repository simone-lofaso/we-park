import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { RootStackScreenProps } from '../types';
import { useState } from 'react';
import Constants from 'expo-constants';
import NorthGarage from '../assets/images/north-garage.jpg';

type FormState = {
  email: string;
  password: string;
};

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `http://${
          Constants.expoConfig?.extra?.apiUrl || 'localhost'
        }:8000/api/v1/user/Login`,
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
    } catch (e) {
      console.error(e);
    }
    //console.log(res.status);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={NorthGarage} style={styles.picture}>
        <Text style={styles.Login}>Login</Text>
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
          title='Go to Register'
          onPress={async () => {
            navigation.navigate('Register');
            // try {
            //   console.log(form);
            //   console.log(
            //     `http://${
            //       Constants.expoConfig?.extra?.apiUrl || 'localhost'
            //     }:8000/api/v1/user/Login`
            //   );
            //   const res = await fetch(
            //     `http://${
            //       Constants.expoConfig?.extra?.apiUrl || 'localhost'
            //     }:8000/api/v1/user/Login`,
            //     {
            //       method: 'POST',
            //       headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //       },
            //       body: JSON.stringify(form),
            //     }
            //   );
            // } catch (e) {
            //   console.error(e);
            // }
            navigation.navigate('Home');
            //console.log(res.status);
          }}
        />
        <Button
          title='Go to Register'
          onPress={async () => {
            navigation.navigate('Register');
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
  Login: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    color: 'white',
  },
});
