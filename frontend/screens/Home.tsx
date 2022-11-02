import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import { RootStackScreenProps } from '../types';

// TODO: Real Home screen

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView>
      <Button
        title='Go To Recommend'
        onPress={() => navigation.navigate('Map')}
      />
    </SafeAreaView>
  );
}
