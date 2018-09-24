import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import Header from './Header';
// import BackImg from './Back';
import background from './Background';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.image} source={{ uri: background }}>
        <Header />
        <Button
          color="orange"
          style={styles.btn}
          title="Coin List"
          onPress={() => navigate('CoinList')}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
  },
  image: {
    flex: 1,
    height: 'auto',
    width: '100%',
    resizeMode: 'contain',
  },
});
