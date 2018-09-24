import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Coin, PieGraph, Home } from './components';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: Home },
  CoinList: { screen: Coin },
  // Graphs: { screen: PieGraph}
});

export default App;
