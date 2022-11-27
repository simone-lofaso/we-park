import Coin from '../../assets/images/coin.png'
import { Image, StyleSheet, View, ViewProps } from 'react-native'
import { Text } from '../../components'

type CoinCounterProps = {
  numberOfCoins: number
} & ViewProps

export default function CoinCounter({ style, numberOfCoins }: CoinCounterProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{`${numberOfCoins > 0 && '+'}${numberOfCoins}`}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={Coin} style={styles.image} />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  txtContainer: {
    justifyContent: 'center'
  },
  txt: {
    fontSize: 30,
    margin: 10
  },
  imgContainer: {
    width: 60,
    height: 60
  },
  image: {
    flex: 1,
    height: undefined,
    resizeMode: 'contain',
    width: undefined
  }
})