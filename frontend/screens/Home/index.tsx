import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { doPark, leavingSpace, updateUser } from '../../api';
import { Button, Text } from '../../components';
import { green } from '../../constants/Colors';
import { RootStackScreenProps, User } from '../../types';
import { getUser } from '../../util';
import CoinCounter from './CoinCounter';

/**
 * Home screen
 */
export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  const [user, setUser] = useState<User>();
  const [parked, setParked] = useState<boolean>(false);
  const isLoading = useIsFocused();
  useEffect(() => {
    (async () => {
      let user = await getUser();
      if (!user) return;
      await updateUser(user.id);
      user = await getUser();
      if (!user) return;
      console.log(user);
      setUser(user);
      if (user.parkedSpaceId) setParked(true);
      else setParked(false);
    })();
  }, [isLoading]);

  const startParkingPress = async () => {
    if (!user) return;
    if (user.tokens < 10) return;
    await doPark(user, navigation, 10);
  };

  const scanParkingPress = async () => {
    if (!user) return;
    navigation.navigate('TakePicture');
  };

  const leaving = async () => {
    if (!user || user.parkedSpaceId === null) return;
    setParked(!(await leavingSpace(user.parkedSpaceId)));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <CoinCounter
          numberOfCoins={user?.tokens !== undefined ? user.tokens : NaN}
          style={styles.currentCoins}
        />
        <AntDesign
          name='user'
          size={45}
          color='white'
          onPress={() => navigation.push('Profile')}
        />
      </View>
      {parked ? (
        <>
          <Button text='Scan (Parking)' onPress={scanParkingPress}>
            <CoinCounter numberOfCoins={10} />
          </Button>
          <View>
            <Button text={"I'm Leaving!"} onPress={leaving} />
          </View>
        </>
      ) : (
        <Button text='Start Parking' onPress={startParkingPress}>
          <CoinCounter numberOfCoins={-10} />
        </Button>
      )}
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
