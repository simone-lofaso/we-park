import { ReactNode } from 'react';
import {
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from './Text';

export type ButtonProps = {
  text: string;
  buttonHeight?: number;
} & PressableProps;

/**
 * Styled Button.
 */
export const Button = ({
  children,
  text,
  buttonHeight,
  ...props
}: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={rippleConfig} style={styles.button} {...props}>
        <Text style={styles.text}>{text}</Text>
        {children as ReactNode}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '80%',
  },
  container: {
    backgroundColor: '#45B499',
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden',
  },
  text: {
    fontSize: 25,
  },
});

const rippleConfig: PressableAndroidRippleConfig = {
  color: 'white',
};
