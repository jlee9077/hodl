export const pieChartData = coinInfo => {
  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7
    );
  return coinInfo.map(coin => {
    return {
      name: coin.name,
      value: coin.circulating_supply,
      color: randomColor() ,
      legendFontColor: randomColor(),
      legendFontSize: 15

    };
  });
};

export const pieChartLabel = coinInfo => {
  return coinInfo.map(coin => {
    return {
      value: coin.circulating_supply,
    };
  });
};

export const keys = ["Bitcoin", "Litecoin", "Terracoin", "Peercoin", "Novacoin", "Feathercoin", "Mincoin", "Freicoin", "Ixcoin"]

export const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};
