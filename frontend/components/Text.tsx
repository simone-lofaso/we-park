import { StyleSheet, Text as BaseText, TextProps } from 'react-native';

export const Text = ({ children, ...props }: TextProps) => {
  return (
    <BaseText {...props} style={styles.text}>
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
