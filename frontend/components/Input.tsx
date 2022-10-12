import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export default function Input({ placeholder, onChangeText }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 1,
    margin: 12,
    padding: 20,
    width: '50%',
  },
});
