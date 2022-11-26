import { useState } from 'react';
import { Button, TextInputProps, StyleSheet, Text, View } from 'react-native';
import { doLogin, doRegister } from '../api';
import { RootStackScreenProps } from '../types';
import { Input } from './Input';

type AuthFormProps = {
  formType: 'Login' | 'Register';
  navigation: RootStackScreenProps<'Login' | 'Register'>['navigation'];
};

export const AuthForm = ({ formType, navigation }: AuthFormProps) => {
  const onPress = () => {
    if (formType === 'Login') {
      doLogin(form, navigation as RootStackScreenProps<'Login'>['navigation']);
    } else {
      doRegister(
        form,
        navigation as RootStackScreenProps<'Register'>['navigation']
      );
    }
  };

  const other = formType === 'Login' ? 'Register' : 'Login';

  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

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
        title={`Go to TakePicture (Debugging)`}
        onPress={async () => {
          navigation.navigate(`TakePicture`);
        }}
      />
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
});
