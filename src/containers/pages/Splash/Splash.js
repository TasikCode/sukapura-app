import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {Thumbnail} from 'native-base';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1200);
  }

  render() {
    return (
      <View style={style.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
        />
        <View style={style.logo}>
          <Image source={require('../../../assets/dummy/sukapura.jpg')} />
          <Text style={{color: '#696969', fontSize: 24, fontWeight: 'bold'}}>
            SUKAPURA
          </Text>
        </View>
        <View style={style.logo1}>
          <Thumbnail source={require('../../../assets/dummy/TCode.jpg')} />
          <Text style={{color: '#7F7F7F', fontSize: 7, fontWeight: 'bold'}}>
            Powered By TasikCode
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo1: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
    borderRadius: 7,
    height: 10,
    width: '100%',
    borderRadius: 7,
  },
});

AppRegistry.registerComponent('Splash', () => Splash);
