import { StyleSheet, Text as BaseText, TextProps } from 'react-native';

export const Text = ({ children, style, ...props }: TextProps) => {
  return (
    <BaseText style={[{ ...styles.text }, style]} {...props}>
      {children}
    </BaseText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'FredokaOne',
    fontSize: 20,
  },
});
