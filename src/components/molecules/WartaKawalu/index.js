import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

const WartaKawalu = ({onPress}) => {
  return (
    <View style={{paddingTop: 3, paddingHorizontal: 17}}>
      <View>
        <Image
          source={require('../../../assets/dummy/tsm1.jpg')}
          style={{height: 170, width: '100%', borderRadius: 7}}
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
            borderRadius: 6,
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
      </View>
      <View
        style={{
          paddingTop: 12,
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
          WARTA-tAsKOT
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7a7a7a',
            marginBottom: 11,
          }}>
          Sukapura Ngadaun Ngora,Tasikmalaya Akan Selalu Menjadi Kota Santri
          Yang Melegenda.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61a657',
            paddingHorizontal: 12,
            paddingVertical: 11,
            alignSelf: 'flex-end',
            borderRadius: 7,
          }}
          onPress={onPress}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
            KUY AOS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WartaKawalu;
