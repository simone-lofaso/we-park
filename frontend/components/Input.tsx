import { Dimensions, StyleSheet, TextInput } from 'react-native';
import type { TextInputProps } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Input = (props: TextInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    backgroundColor: 'white',
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    width: 0.8 * width,
  },
});
