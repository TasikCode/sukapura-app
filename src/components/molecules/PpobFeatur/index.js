import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const PpobFeature = props => {
  return (
    <View style={{width: '25%', alignItems: 'center'}}>
      <View
        style={{
          width: 41,
          height: 41,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColor,
        }}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={props.img} />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 9, textAlign: 'center', marginTop: 6}}>
        {props.title}
      </Text>
    </View>
  );
};

export default PpobFeature;
