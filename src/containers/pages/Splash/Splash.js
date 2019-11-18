import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
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
          <Text style={{color: '#24292E', fontSize: 24, fontWeight: 'bold'}}>
            SUKAPURA
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
});

AppRegistry.registerComponent('Splash', () => Splash);
