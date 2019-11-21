import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
const data = [
  {
    name: 'Kurang Mampu',
    population: 9232,
    color: 'rgba(255, 255, 0)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 13,
  },
  {
    name: 'Menengah',
    population: 12342,
    color: 'rgba(240, 230, 140)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 13,
  },
  {
    name: 'Mampu',
    population: 11234,
    color: 'rgba(251, 140, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 13,
  },
];
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(218, 112, 214, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const ChartPieIndihiang = () => {
  return (
    <View style={{paddingLeft: 20, bottom: 10, paddingRight: 2}}>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={15}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 25,
          color: '#FFD700',
        }}>
        #TINGKAT KESEJAHTERAAN MASYARAKAT
      </Text>
    </View>
  );
};

export default ChartPieIndihiang;
