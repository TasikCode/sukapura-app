import React from 'react';
import {Text, View, Button, StatusBar} from 'react-native';
import {CardEcomOne, CardEcomThree} from 'react-native-card-ui';
import {ScrollView} from 'react-native-gesture-handler';
import PpobSection from '../../organism/PpobSection';
import WartaCipedes from '../../../components/molecules/WartaCipedes';
import CipedesChartSection from '../../../containers/organism/ScrollChartSection/CipedesChartSection';

const KecamatanCipedes = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFAFA"
      />
      <CipedesChartSection />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 17,
          fontWeight: 'bold',
          marginTop: 5,
          borderBottomWidth: 1,
          padding: 16,
          backgroundColor: '#FFF',
          paddingBottom: 2,
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          elevation: 1,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          borderColor: '#DDD',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        MIINDUNG KA WAKTU,MIBAPAK KAZAMAN
      </Text>
      <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 8}}>
        {/* PPOB */}
        <PpobSection />
        <WartaCipedes />
        <CardEcomThree
          title={'Mie Ajam Nzo 777'}
          subTitle={'Mie Na Meuli,Hayamna Newak Sorangan'}
          price={'$200'}
          image={require('../../../assets/dummy/go-food-gm.jpg')} // OR {{uri:"http://......"}}
          buttonText={'Sleding Now'}
          buttonColor={'#ff2788'}
          onClickButton={() =>
            alert('Maaf Yang Dagang Sedang Sholat,Maneh Sholat Acan??')
          }
        />
      </ScrollView>
    </View>
  );
};

export default KecamatanCipedes;
