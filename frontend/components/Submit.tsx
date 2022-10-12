import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export default function Submit({ onPress }: PressableProps) {
  return (
    <Pressable style={styles.submit} onPress={onPress}>
      <Text>Submit!</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  submit: {
    backgroundColor: 'white',
    margin: 12,
    padding: 20,
    width: '50%',
  },
});
