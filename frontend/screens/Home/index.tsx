import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { doPark } from '../../api';
import { Button } from '../../components';
import { green } from '../../constants/Colors';
import { RootStackScreenProps, User } from '../../types';
import { getUser } from '../../util';
import CoinCounter from './CoinCounter';

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  const [user, setUser] = useState<User>();

  const startParkingPress = async () => {
    if (!user) return;
    if (user.tokens < 10) return;
    await doPark(user, navigation);
  };

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
      <Button text='Start Parking' onPress={startParkingPress}>
        <CoinCounter numberOfCoins={-10} />
      </Button>
      <Button text='Scan (Parking)'>
        <CoinCounter numberOfCoins={10} />
      </Button>
      <Button text='Scan (Leaving)'>
        <CoinCounter numberOfCoins={10} />
      </Button>
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
