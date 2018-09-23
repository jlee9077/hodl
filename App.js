import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Coin, Graph } from './components';
import { createStackNavigator } from 'react-navigation'

const App = createStackNavigator({
  Home: { screen: Header },
  CoinList: { screen: Coin},
  // Graphs: { screen: Graph}
})

export default App;

