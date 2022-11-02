import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import { RootStackScreenProps } from '../types';

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
    </SafeAreaView>
  );
}
