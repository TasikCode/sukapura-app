import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const NavBaricon = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image style={{width: 26, height: 26}} source={props.img} />
        <Text
          style={{
            fontSize: 10,
            color: '#545454',
            marginTop: 4,
            color: props.active ? 'red' : '#545454',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default NavBaricon;
