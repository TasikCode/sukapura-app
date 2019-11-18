import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
class Login extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#FFF"
        />
        <View style={{...StyleSheet.absoluteFill}}>
          <Image
            source={require('../../../assets/dummy/suka1.jpg')}
            style={{flex: 1, height: null, width: null}}
          />
        </View>
        <View style={{height: height / 3, justifyContent: 'center'}}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>SIGN IN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{...styles.button, backgroundColor: '#2E71DC'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                SIGN IN WITH FACEBOOK
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
});
