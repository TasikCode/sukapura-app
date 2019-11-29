import React, {Component} from 'react';
import {ScrollView, Text, View, StatusBar} from 'react-native';
import NewsSection from '../../../components/molecules/NewsSection';
import SearchFeature from '../../../components/molecules/SearchFeature';
import VoucherInfo from '../../../components/molecules/VoucherInfo';
import WartaNews from '../../../components/molecules/WartaNews';
import MainSection from '../../organism/MainSection';
import ScrollableProducts from '../../../containers/organism/ScrollableProducts';
import NavIcons from '../../../containers/organism/NavIcons';
import Kecamatan from '../../organism/Kecamatan';
import IyuweFeature from '../../organism/IyuweFeature';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
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
          {/* Search Bar*/}
          <SearchFeature />
        </View>
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 1}}>
          {/*iyuwe pay*/}
          <IyuweFeature />
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
