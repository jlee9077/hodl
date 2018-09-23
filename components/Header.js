import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HODL!!!!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default Header
