import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import { RootStackScreenProps } from '../types';

// TODO: Real Home screen

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView>
      <Button
        title='Go To Map'
        onPress={() => navigation.navigate('Map')}
      />
      <Button
        title='Go To Register'
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title='Go To ScanAI'
        onPress={() => navigation.navigate('ScanAI')}
      />
      <Button
        title='Go To Login'
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
}
