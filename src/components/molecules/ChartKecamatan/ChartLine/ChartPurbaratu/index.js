import React from 'react';
import {View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const ChartPurbaratu = () => {
  return (
    <View style={{}}>
      <LineChart
        data={{
          labels: [
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
          ],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={400} // from react-native
        height={200}
        yAxisLabel={'$'}
        yAxisSuffix={'k'}
        chartConfig={{
          backgroundColor: '#F5FFFA',
          backgroundGradientFrom: '#F5FFFA',
          backgroundGradientTo: '#F5FFFA',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingLeft: 9,
        }}
      />
    </View>
  );
};
export default ChartPurbaratu;
