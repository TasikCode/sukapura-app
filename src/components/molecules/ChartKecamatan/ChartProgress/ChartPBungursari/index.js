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
const data = {
  labels: ['Bekerja', 'Merantau', 'Nyari Kerja', 'Pelajar'], // optional
  data: [0.3, 0.3, 0.2, 0.4],
};
const chartConfig = {
  backgroundGradientFrom: '#FFFAFA',
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: '#FFFAFA',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(218, 112, 214, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const ChartPBungursari = () => {
  return (
    <View>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        style={{
          marginHorizontal: 7,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 20,
          paddingLeft: 60,
          color: '#FF00FF',
        }}>
        #STATISTIK SDM BUNGURSARI
      </Text>
    </View>
  );
};

export default ChartPBungursari;
