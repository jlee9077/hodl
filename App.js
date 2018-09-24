import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Coin, Home } from './components';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: Home },
  CoinList: { screen: Coin },
});

export default App;
