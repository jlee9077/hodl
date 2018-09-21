import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
import Store from './reducers/Store';
import Provider from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
        </View>
      </Provider>
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
