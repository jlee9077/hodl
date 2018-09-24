import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from './Img';

const Crypto = props => {
  const { coin } = props;

  return coin ? (
    <View style={styles.container}>
      <View style={styles.line}>
        <Image style={styles.image} source={{ uri: images[coin.symbol] }} />
        <Text style={styles.name}>{coin.name}</Text>
        <Text style={styles.divide}>|</Text>
        <Text style={styles.symbol}>{coin.symbol}</Text>
        <Text style={styles.price}>
          <Text style={styles.cashMoney}> $ </Text>
          {coin.quotes.USD.price}
        </Text>
      </View>
    </View>
  ) : (
    <Text>No Dice!</Text>
  );
};

const styles = StyleSheet.create({
  cashMoney: {
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
  },
  container: {
    display: 'flex',
    marginBottom: 10,
    borderBottomColor: 'orange',
    borderBottomWidth: 4,
    padding: 10,
  },
  name: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
  },
  divide: {
    marginTop: 10,
  },
  price: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 5,
    fontWeight: 'bold',
    color: 'green'
  },
  symbol: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    fontWeight: 'bold',
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default Crypto;
