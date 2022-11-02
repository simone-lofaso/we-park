import { SafeAreaView, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../types';
import { Button, Text } from '@rneui/themed';

export default function Map({
  navigation,
  route,
}: RootStackScreenProps<'Map'>) {
  const { floor } = route.params.parkingSpace;
  const { garageName } = route.params;

  const handlePark = async () => {
    // TODO: connect api route to parking
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Please park on floor ${floor} in garage ${garageName}`}</Text>
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
