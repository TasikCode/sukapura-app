import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

const VoucherInfo = () => {
  return (
    <View style={{padding: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/food-banner.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.15,
            borderRadius: 7,
          }}></View>
        <View
          style={{
            height: 15,
            width: 60,
            position: 'absolute',
            top: 10,
            left: 13,
          }}>
          <Image
            source={require('../../../assets/logo/Neuda-logo.png')}
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
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 5,
              }}>
              HARATIS,NEUDA Unggal Dinten
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white'}}>
              Sok Atuh,Kabujeung Rengse!
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61a657',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'stretch',
                borderRadius: 7,
              }}>
              <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>
                Klik ulah isin-isin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          marginTop: 16,
        }}></View>
    </View>
  );
};

export default VoucherInfo;
