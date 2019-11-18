import React from 'react';
import {View, Text} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const ChartCipedes = () => {
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
          backgroundColor: '#FFFAFA',
          backgroundGradientFrom: '#FFFAFA',
          backgroundGradientTo: '#FFFAFA',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(63, 255, 128, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#00FA9A',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingLeft: 9,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#00FF7F',
          marginTop: 7,
        }}>
        #ESTIMASI KAS KECAMATAN
      </Text>
    </View>
  );
};
export default ChartCipedes;
