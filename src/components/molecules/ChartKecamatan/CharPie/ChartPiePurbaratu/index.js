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
    population: 215000,
    color: 'rgba(30, 144, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 13,
  },
  {
    name: 'Menengah',
    population: 280000,
    color: 'rgba(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 13,
  },
  {
    name: 'Mampu',
    population: 52761,
    color: 'rgba(0, 0, 139)',
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

const ChartPiePurbaratu = () => {
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
          color: '#87CEFA',
        }}>
        #TINGKAT KESEJAHTERAAN MASYARAKAT
      </Text>
    </View>
  );
};

export default ChartPiePurbaratu;
