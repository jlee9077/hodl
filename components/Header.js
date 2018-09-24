import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Graph from './Graph';
import background from './Background';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          HODLER 4 LIFE
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'center',
  },
});

export default Header;
