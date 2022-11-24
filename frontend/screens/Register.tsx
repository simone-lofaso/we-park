import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AuthForm } from '../components/AuthForm';
import { green } from '../constants/Colors';
import { RootStackScreenProps } from '../types';

type FormState = {
  email: string;
  password: string;
};

export default function Register({
  navigation,
}: RootStackScreenProps<'Register'>) {
  return (
    <SafeAreaView style={styles.container}>
      <AuthForm formType='Register' navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: green,
    justifyContent: 'center',
    height: '100%',
    padding: 20,
    width: '100%',
  },
});
