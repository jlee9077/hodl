import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import apiPub from './ApiPub';
import images from './Img';
import {Crypto} from './index'

export default class Coin extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }
  loadData = async () => {
    const response = await axios.get(apiPub);
    console.log("This is data", response)
    const coins = response.data.data;
    this.setState({
      coins,
    });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { coins, loading } = this.state;
    console.log('This is COINS', coins);
    return coins ? (
      <View>
        {
          coins.map(coin => {
            return (
              // <Text>{coin.name} {coin.symbol}</Text>
              <Crypto key={coin.id} coin={coin}/>
            )
          })
        }
        <Text>This is Loaded</Text>
      </View>
    ) : (
      <Text>FAIL</Text>
    );
  }
}
