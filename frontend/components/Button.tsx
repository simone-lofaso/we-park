import { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, View } from 'react-native'
import { Text } from './Text'

type ButtonProps = {
  text: string
} & PressableProps

export const Button = ({ children, text, ...props }: ButtonProps) => {

  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{text}</Text>
      {children as ReactNode}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#45B499',
    borderRadius: 20,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    width: '80%'
  },
  text: {
    fontSize: 30
  }
})