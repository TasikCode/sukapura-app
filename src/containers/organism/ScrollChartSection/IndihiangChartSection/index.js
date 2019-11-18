import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ChartPieIndihinag from '../../../../components/molecules/ChartKecamatan/CharPie/ChartPieIndihinag';
import ChartPIndihiang from '../../../../components/molecules/ChartKecamatan/ChartProgress/ChartPIndihiang';
import ChartIndihiang from '../../../../components/molecules/ChartKecamatan/ChartLine/ChartIndihiang';

class IndihiangChartSection extends Component {
  render() {
    return (
      <View
        style={{
          padding: 16,
          backgroundColor: '#FFFAFA',
          paddingBottom: 2,
          borderRadius: 16,
        }}>
        <View
          style={{
            height: 15,
            width: 60,
            marginLeft: 10,
            marginTop: 1,
            marginBottom: 1,
          }}>
          <Image
            source={require('../../../../assets/logo/Neuda-logo.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 2,
            marginHorizontal: 16,
          }}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1c1c1c'}}>
            KECAMATAN INDIHIANG
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#61A756'}}>
            46411
          </Text>
        </View>
        <ScrollView
          horizontal
          style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 14}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: -7}}>
            <ChartIndihiang />
            <ChartPIndihiang />
            <ChartPieIndihinag />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '30%',
                marginBottom: 12,
              }}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default IndihiangChartSection;
