import { SafeAreaView, StyleSheet } from 'react-native';
import { RootStackScreenProps, User } from '../types';
import { Button, Text } from '@rneui/themed';
import { finishPark } from '../api';
import { useEffect, useState } from 'react';
import { getUser } from '../util';

export default function Map({
  navigation,
  route,
}: RootStackScreenProps<'Map'>) {
  const { parkingSpace, garageName } = route.params;
  const [user, setUser] = useState<User>();

  const handlePark = async () => {
    if (!user) return;
    await finishPark(user.id, parkingSpace.garageId, navigation);
  };

  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user) setUser(user);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Please park on floor ${parkingSpace.floor} in garage ${garageName}`}</Text>
      <Button title='I Parked!' onPress={handlePark} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
    width: '100%',
  },
});
