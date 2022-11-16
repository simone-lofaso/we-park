import { Image, StyleSheet, Text, View } from 'react-native';
import Token from '../assets/images/token.png';
import type { StyleProp, ViewStyle } from 'react-native';

export type CoinCounterProps = {
  tokens: number;
  style?: ViewStyle;
};

export function CoinCounter({ tokens, style }: CoinCounterProps) {
  return (
    <View style={{ ...style, ...styles.container }}>
      <Image source={Token} style={styles.image} />
      <Text style={styles.tokenAmount}>{tokens}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    aspectRatio: 1,
    borderRadius: 100,
    display: 'flex',
    flex: 1,
    height: '12%',
    width: '12%',
  },
  tokenAmount: {
    color: 'white',
    flex: 6,
    fontFamily: 'Fredoka-One',
    fontSize: 30,
    marginLeft: 10,
  },
});
