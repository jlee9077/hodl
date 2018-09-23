import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import images from './Img'
const Crypto = (props) => {
  const { coin } = props
  console.log("this is coins", props)
  return coin ? (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: images[coin.symbol]}}/>
      <Text>{coin.name}</Text>
      <Text>{coin.symbol}</Text>
      <Text>{coin.quotes.USD.price}</Text>
    </View>
  ) : <Text>Loading</Text>
}

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35
  },
  container: {
    display: 'flex'
  },
  text: {

  }
})

export default Crypto
