import React, {Component} from 'react';
import {Image, ScrollView, Text, View, StatusBar} from 'react-native';
import NewsSection from '../../../components/molecules/NewsSection';
import SearchFeature from '../../../components/molecules/SearchFeature';
import VoucherInfo from '../../../components/molecules/VoucherInfo';
import WartaNews from '../../../components/molecules/WartaNews';
import IyuwePayFeature from '../../../containers/organism/IyuwePayFeature';
import MainSection from '../../organism/MainSection';
import ScrollableProducts from '../../../containers/organism/ScrollableProducts';
import NavIcons from '../../../containers/organism/NavIcons';
import Kecamatan from '../../organism/Kecamatan';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, elevation: 5}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
        />
        <View
          style={{
            marginBottom: 3,
            marginTop: 6,
          }}>
          <SearchFeature />
        </View>
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 8}}>
          {/* Search Bar*/}
          {/*iyuwe pay*/}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#05DDC1',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 10,
              }}>
              <Image
                source={require('../../../../src/assets/icon/iyuwe4.png')}
              />
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                Rp.-777.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 15,
                paddingBottom: 10,
                backgroundColor: '#14F0D3',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <IyuwePayFeature
                title="Bayar"
                img={require('../../../../src/assets/icon/bayar2.png')}
              />
              <IyuwePayFeature
                title="Pelajar"
                img={require('../../../../src/assets/icon/memeber-1.png')}
              />
              <IyuwePayFeature
                title="Isi Saldo"
                img={require('../../../../src/assets/icon/top-up.png')}
              />
              <IyuwePayFeature
                title="Nusanesna"
                img={require('../../../../src/assets/icon/more1.png')}
              />
            </View>
          </View>
          {/*Main Feature*/}
          <MainSection />
          <View
            style={{
              marginTop: 2,
              marginHorizontal: 16,
              marginBottom: 2,
            }}></View>
          {/*Kecamatan image*/}
          <Kecamatan />
          {/* Line Border */}
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginTop: 5,
              marginHorizontal: 16,
              marginBottom: 20,
            }}></View>
          {/* WartaNews */}
          <WartaNews
            onPress={() => this.props.navigation.navigate('WartaTasikDetail')}
          />
          {/*NEWS Section 2*/}
          <NewsSection />
          {/*voucher banner*/}
          <VoucherInfo />
          {/*NEUDA Section*/}
          <ScrollableProducts />
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginTop: 5,
              marginHorizontal: 16,
              marginBottom: 20,
            }}></View>
        </ScrollView>
        {/*Menu Bar*/}
        <NavIcons />
      </View>
    );
  }
}
export default Home;
