import { useEffect, useState } from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';
import { doLogin, doRegister } from '../api';
import { RootStackScreenProps } from '../types';
import { getUser } from '../util';
import { Input } from './Input';

type AuthFormProps = {
  formType: 'Login' | 'Register';
  navigation: RootStackScreenProps<'Login' | 'Register'>['navigation'];
};

export const AuthForm = ({ formType, navigation }: AuthFormProps) => {
  useEffect(() => {
    (async () => {
      if (await getUser()) navigation.navigate('Home');
    })();
  }, []);

  const onPress = async () => {
    try {
      if (formType === 'Login') {
        await doLogin(
          form,
          navigation as RootStackScreenProps<'Login'>['navigation']
        );
      } else {
        await doRegister(
          form,
          navigation as RootStackScreenProps<'Register'>['navigation']
        );
      }
    } catch (e) {
      if (e instanceof Error) {
        setErr(e.message);
        return;
      }
      throw e;
    }
  };

  const other = formType === 'Login' ? 'Register' : 'Login';
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [err, setErr] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WePark™</Text>
      <Text style={styles.label}>{formType}</Text>
      <Input onChangeText={(text) => setForm({ ...form, email: text })} />
      <Text style={styles.label}>Email</Text>
      <Input
        secureTextEntry
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      <Text style={styles.label}>Password</Text>
      <Button title='Submit' onPress={onPress} />
      <Button
        title={`Go to ${other}`}
        onPress={async () => {
          navigation.navigate(`${other}`);
        }}
      />
      {/*Debugging only, delete later*/}
      <Button
        title={`Go to ScanAI (Debugging)`}
        onPress={async () => {
          navigation.navigate(`ScanAI`);
        }}
      />
      <Text style={styles.error}>{err}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'FredokaOne',
    fontSize: 75,
  },
  label: {
    color: 'white',
    fontFamily: 'FredokaOne',
    fontSize: 25,
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
  error: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
});
