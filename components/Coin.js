import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import apiPub from './index'
import images from './Img'


export default class Coin extends Component {
  constructor() {
    super()

    this.state = {
      coins: [],
      loading: true,
    }
  }
  loadData = () => {
    axios.get(apiPub)
    .then(response => {
      const coins = response.data.data;
      this.setState({
        coins,
        loading: false
      });
    })
  }
  componentDidMount() {
    this.loadData()
  }

  render() {
    const { coins, loading } = this.state
    console.log("This is COINS", coins)
    return loading ? (
      <View>
        <Text>{}</Text>
      </View>
    ) : <Text>Hello</Text>
  }
}
