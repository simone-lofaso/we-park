import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import { RootStackScreenProps } from '../types';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://reactjs.org/logo-og.png' };
import Splash from '../assets/images/splash.png';

// TODO: Real Home screen

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView>
      <Button
        title='Go To Recommend'
        onPress={() => {
          const parkingSpace = {
            // TODO: replace with api call to db to get available space
            id: 1,
            floor: 1,
            row: 1,
            section: 'A',
            garageId: 1,
          };
          const garageName = 'North Garage'; // TODO: replace with api call to get garagename
          navigation.navigate('Map', {
            parkingSpace,
            garageName,
          });
        }}
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
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
