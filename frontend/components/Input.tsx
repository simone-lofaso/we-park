import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { width } from '../constants/Dimensions';

export const Input = (props: TextInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    backgroundColor: 'white',
    fontSize: 25,
    margin: 10,
    padding: 4,
    textAlign: 'center',
    width: 0.8 * width,
  },
});
