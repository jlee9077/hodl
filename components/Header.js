import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Graph from './Graph'
const Header = props => {
  const { navigate } = props.navigation;
  return (
    <View>
      <Button title="Coin List" onPress={() => navigate('CoinList')} />
      <View style={styles.container}>
        <Text style={styles.title}>HODL!!!!!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Header;
