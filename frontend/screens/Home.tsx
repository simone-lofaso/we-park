import { Button } from '@rneui/themed';
import { RootStackScreenProps } from '../types';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { CoinCounter } from '../components';
import type { ReactNode } from 'react';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#61FFB1',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

const Row = ({ children }: { children: ReactNode }) => (
  <View style={styles.row}>{children}</View>
);

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView style={styles.container}>
      <CoinCounter tokens={15} />
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
        title='Go To ScanAI'
        onPress={() => navigation.navigate('ScanAI')}
      />
      <Button
        title='Go To Login'
        onPress={() => navigation.navigate('Login')}
      /> */}
    </SafeAreaView>
  );
}
