import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import apiPub from './ApiPub';
import images from './Img';
import { Crypto } from './index';
import Graph from './Graph';
import PieGraph from './PieGraph';

export default class Coin extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }
  loadData = async () => {
    const response = await axios.get(apiPub);
    const coins = response.data.data;
    this.setState({
      coins,
    });
  };

  componentDidMount() {
    this.loadData();
  }

  renderCoin() {
    const { coins } = this.state;

    return coins ? (
      <View>
        <PieGraph info={coins} />
        {coins.map(coin => {
          return <Crypto key={coin.id} coin={coin} />;
        })}
      </View>
    ) : (
      <Text>No Dice!</Text>
    );
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoin()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
});
