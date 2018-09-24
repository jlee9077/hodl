import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import background from './Background';

export default class BackImg extends Component {

    render() {
      return (
        <ImageBackground style={styles.image}source={{ uri: background }}>
        </ImageBackground>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    height: 'auto',
    width: '100%',
  },
});
