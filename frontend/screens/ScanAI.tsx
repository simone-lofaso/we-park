import { ImageBackground, Text } from 'react-native';
import Splash from '../assets/images/splash.png';
import Constants from 'expo-constants';

const { manifest } = Constants;
const uri = `http://${manifest?.debuggerHost?.split(':').shift()}:8000`;

export default function ScanAI() {
  return (
    <>
      <ImageBackground source={Splash}></ImageBackground>
      <Text>Hello world on purpoaw</Text>
    </>
  );
}
