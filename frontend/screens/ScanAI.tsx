import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { green } from '../constants/Colors';
import * as FileSystem from 'expo-file-system';
import Splash from '../assets/images/splash.png';
import { RootStackScreenProps } from '../types';

export default function ScanAI({
  navigation,
  route,
}: RootStackScreenProps<'ScanAI'>) {
  const { Picture } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: Picture }}
        style={{ width: '100%', height: '100%' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: green,
    justifyContent: 'center',
    height: '100%',
    padding: 20,
    width: '100%',
  },
});
