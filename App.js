import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Coin } from './components';


export default class App extends React.Component {
  render() {
    return (
        <View>
          <Header />
          <Coin />
        </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
