import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { pieChartData, pieChartLabel, chartConfig, keys } from '../utils';

const PieGraph = props => {
  const { info } = props;
  const pieChartInfo = pieChartData(info);
  const labels = pieChartLabel(info);

  return info ? (
    <View>
      <Text>Bezier Line Chart</Text>
      <PieChart
        data={pieChartInfo}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={chartConfig}
        accessor="value"
        bgColor="transparent"
        paddingLeft="15"
      />
    </View>
  ) : (
    <Text>Loading</Text>
  );
};

export default PieGraph;
