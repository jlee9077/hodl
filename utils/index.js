export const pieChartData = coinInfo => {
  return coinInfo.map(coin => {
    return {
      key: coin.name,
      value: coin.circulating_supply,
    };
  });
};

// export const config = [
//   { color: '#aaac84' },
//   { color: '#dce7c5' },
//   { color: '#e3a51a' },
// ];

export const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}
