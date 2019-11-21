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

const ChartTamansari = () => {
  return (
    <View style={{}}>
      <LineChart
        data={{
          labels: ['Juli', 'Agust', 'Sept', 'Okto', 'Novem', 'Desem'],
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
          color: (opacity = 1) => `rgba(19, 100, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#228B22',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingLeft: 1,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#228B22',
          marginTop: 7,
        }}>
        #ESTIMASI KAS KECAMATAN
      </Text>
    </View>
  );
};
export default ChartTamansari;
