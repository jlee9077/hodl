import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from './Img';

const Crypto = props => {
  const { coin } = props;

  return coin ? (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: images[coin.symbol] }} />
      <Text>{coin.name}</Text>
      <Text style={styles.divide}>|</Text>
      <Text>{coin.symbol}</Text>
      <Text style={styles.price}>{coin.quotes.USD.price}</Text>
    </View>
  ) : (
    <Text>Loading</Text>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
  },
  container: {
    display: 'flex',
    marginBottom: 10,
  },
  text: {},
  divide: {
    marginTop: 5
  },
  price: {

  }
});

export default Crypto;
