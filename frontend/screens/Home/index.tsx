import { SafeAreaView } from 'react-native';
import { RootStackScreenProps } from '../../types';
import { StyleSheet } from 'react-native';
import CoinCounter from './CoinCounter';
import { Button } from '../../components'
import { green } from '../../constants/Colors';

// TODO: Real Home screen

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CoinCounter style={styles.currentCoins} /> */}
      <Button text='View Parking'><CoinCounter numberOfCoins={10}/></Button>
      {/* <Button
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
        title='Go To Login'
        onPress={() => navigation.navigate('Login')}
      />
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: green,
    flex: 1,
  },
  currentCoins: {
    position: 'absolute',
    right: 0,
    top: 0,
  }
});
