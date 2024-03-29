import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { doScan } from '../api';
import { RootStackScreenProps, User } from '../types';
import { getUser } from '../util';

export default function TakePicture({
  navigation,
}: RootStackScreenProps<'TakePicture'>) {
  const [type, setType] = useState(CameraType.back);
  const [user, setUser] = useState<User>();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const ref = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user) setUser(user);
    })();
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    );
  }

  // Flip between front and back camera
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  // Take the picture
  async function snapPhoto() {
    if (!user) return;
    console.log('Taking picture');
    if (ref != null && ref.current != null) {
      // const photo = await ref.current.takePictureAsync();
      await doScan(user.id, user.tokens, navigation);
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#fff',
                marginTop: '15%',
              }}
              onPress={snapPhoto}></TouchableOpacity>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
