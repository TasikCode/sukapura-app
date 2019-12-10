import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import IyuwePayFeature from '../../../components/molecules/IyuwePayFeature';
import {withNavigation} from 'react-navigation';

class IyuweFeature extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17, marginTop: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#05DDC1',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            padding: 9,
          }}>
          <Image source={require('../../../assets/icon/iyuwe4.png')} />
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Rp.-777.000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#14F0D3',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <IyuwePayFeature
            title="Bayar"
            onPress={() => this.props.navigation.navigate('ScanQode')}
            img={require('../../../assets/icon/bayar2.png')}
          />
          <IyuwePayFeature
            title="Pelajar"
            img={require('../../../assets/icon/memeber-1.png')}
          />
          <IyuwePayFeature
            title="+Saldo"
            img={require('../../../assets/icon/top-up.png')}
          />
          <IyuwePayFeature
            title="Klik"
            img={require('../../../assets/icon/more1.png')}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(IyuweFeature);
