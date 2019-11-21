import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ChartPieTamansari from '../../../../components/molecules/ChartKecamatan/CharPie/ChartPieTamansari';
import ChartPTamansari from '../../../../components/molecules/ChartKecamatan/ChartProgress/ChartPTamansari';
import ChartTamansari from '../../../../components/molecules/ChartKecamatan/ChartLine/ChartTamansari';

class TamansariChartSection extends Component {
  render() {
    return (
      <View
        style={{
          padding: 16,
          backgroundColor: '#FFFAFA',
          paddingBottom: 2,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          elevation: 4,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          // borderWidth: 1,
          borderColor: '#DDD',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
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
            KECAMATAN TAMANSARI
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#006400'}}>
            46191
          </Text>
        </View>
        <ScrollView
          horizontal
          style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 14}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: -7}}>
            <ChartTamansari />
            <ChartPTamansari />
            <ChartPieTamansari />
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

export default TamansariChartSection;
