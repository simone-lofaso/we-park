import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

export default function Map() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    async () => {
      const res = await fetch(
        `${Constants.expoConfig?.extra?.apiUrl}/api/v1/parking/register`
      );
    };
  });

  return <SafeAreaView></SafeAreaView>;
}
