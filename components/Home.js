import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Home extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground style={styles.image} source={{ uri: background }}>
          <Text style={styles.title}>HODL!!!!!!</Text>
          <Button title="Coin List" onPress={() => navigate('CoinList')} />
          <Button title="Graph" onPress={() => navigate('Graphs')} />
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
