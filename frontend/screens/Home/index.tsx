import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from '../../components';
import { green } from '../../constants/Colors';
import { RootStackScreenProps, User } from '../../types';
import { getUser } from '../../util';
import CoinCounter from './CoinCounter';

// TODO: Real Home screen

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user) setUser(user);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <CoinCounter
          numberOfCoins={user?.tokens || NaN}
          style={styles.currentCoins}
        />
        <AntDesign
          name='user'
          size={45}
          color='white'
          onPress={() => navigation.push('Profile')}
        />
      </View>
      <Button text='Start Parking'>
        <CoinCounter numberOfCoins={-10} />
      </Button>
      <Button text='Scan (Parking)'>
        <CoinCounter numberOfCoins={10} />
      </Button>
      <Button text='Scan (Leaving)'>
        <CoinCounter numberOfCoins={10} />
      </Button>
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
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: green,
    flex: 1,
    justifyContent: 'center',
  },
  currentCoins: {},
  nav: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
