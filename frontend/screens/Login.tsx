import { SafeAreaView, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../types';
import { green } from '../constants/Colors';
import { AuthForm } from '../components/AuthForm';

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <SafeAreaView style={styles.container}>
      <AuthForm formType='Login' navigation={navigation} />
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
