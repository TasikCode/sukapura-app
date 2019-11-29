import React, {Component} from 'react';
import {View} from 'react-native';
import NavBaricon from '../../../components/molecules/NavBaricon';
import {withNavigation} from 'react-navigation';

class NavIcons extends Component {
  render() {
    return (
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderColor: '#e8e8e8',
        }}>
        <NavBaricon
          onPress={() => this.props.navigation.navigate('Home')}
          title="tAskot"
          img={require('../../../assets/icon/home-active1.png')}
          active
        />
        <NavBaricon
          onPress={() => this.props.navigation.navigate('Orders')}
          title="Pesenan"
          img={require('../../../assets/icon/order.png')}
        />
        <NavBaricon
          onPress={() => this.props.navigation.navigate('Ngobrol')}
          title="Ngobrol"
          img={require('../../../assets/icon/help.png')}
        />
        <NavBaricon
          onPress={() => this.props.navigation.navigate('Inbox')}
          title="Inbox"
          img={require('../../../assets/icon/inbox.png')}
        />
        <NavBaricon
          onPress={() => this.props.navigation.navigate('Akun')}
          title="Akun"
          img={require('../../../assets/icon/account.png')}
        />
      </View>
    );
  }
}

export default withNavigation(NavIcons);
