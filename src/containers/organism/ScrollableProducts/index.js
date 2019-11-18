import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
  render() {
    return (
      <View>
        <View style={{padding: 16}}>
          <View
            style={{
              height: 15,
              width: 60,
              marginLeft: 10,
              marginTop: -15,
              marginBottom: 5,
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 14,
              marginHorizontal: 16,
            }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1c1c1c'}}>
              BALAD PATUANGAN
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#61A756'}}>
              NUSANESNA
            </Text>
          </View>
          <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 1}}>
            <ScrollableItem
              title="Khas Sunda"
              img={require('../../../assets/dummy/go-food-kfc.jpg')}
            />
            <ScrollableItem
              title="Bakmie GM"
              img={require('../../../assets/dummy/go-food-gm.jpg')}
            />
            <ScrollableItem
              title="Ayam Geprek"
              img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
            />
            <ScrollableItem
              title="Martabak Orins"
              img={require('../../../assets/dummy/go-food-orins.jpg')}
            />
            <ScrollableItem
              title="Martabak Asin Banka"
              img={require('../../../assets/dummy/go-food-banka.jpg')}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ScrollableProducts;
