import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import { RootStackScreenProps } from '../types';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };
import Splash from '../assets/images/splash.png';

// TODO: Real Home screen

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={Splash} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <Button
          title='Go To Map'
          onPress={() => navigation.navigate('Map')}
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
      </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
