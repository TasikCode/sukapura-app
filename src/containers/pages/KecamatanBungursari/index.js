import React from 'react';
import {Text, View, Button, StatusBar, Dimensions} from 'react-native';
import {CardEcomThree} from 'react-native-card-ui';
import {ScrollView} from 'react-native-gesture-handler';
import PpobSection from '../../organism/PpobSection';
import WartaBungursari from '../../../components/molecules/WartaBungursari';
import BungursariChartSection from '../../../containers/organism/ScrollChartSection/BungursariChartSection';

const KecamatanBungursari = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFAFA"
      />
      <BungursariChartSection />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
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
        SILIH ASIH,SILIH ASAH,SILIH ASUH
      </Text>
      <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 1}}>
        {/* PPOB */}
        <PpobSection />
        <Text
          style={{
            paddingTop: 3,
            paddingHorizontal: 17,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Warta Bungursari
        </Text>
        <WartaBungursari onPress={() => alert('Dalam Pengembangan')} />
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

export default KecamatanBungursari;
