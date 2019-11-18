import React from 'react';
import {Text, View, Button} from 'react-native';
import {CardEcomOne, CardEcomThree} from 'react-native-card-ui';
import NavIcons from '../../organism/NavIcons';
import SearchFeature from '../../../components/molecules/SearchFeature';
import {ScrollView} from 'react-native-gesture-handler';
import icon from 'react-native-vector-icons/FontAwesome';

const KecamatanBungursari = props => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 8}}>
        <SearchFeature />
        <CardEcomOne
          title={'HAYAM PAEH'}
          price={'$200'}
          image={require('../../../assets/dummy/go-food-kfc.jpg')} //OR {{uri:"http://......"}}
          icon={'star'}
          nbStar={3}
          iconColor={'#FFC57C'}
          colorList={[
            'TOng Di Beli,Haram',
            'Eh,Di Bejaan Ngeyel',
            'Nya Geus Atu,Tuang Jeung Buluna ke Nya!!',
          ]}
          selectColor={'#000000'}
          getSelectColor={color => alert(color)}
        />
        <CardEcomThree
          title={'Mie Hayam Nzo 777'}
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
      <NavIcons />
    </View>
  );
};

export default KecamatanBungursari;
