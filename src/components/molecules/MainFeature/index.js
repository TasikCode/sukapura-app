import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const MainFeature = props => {
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
        }}></View>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img} />
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            marginTop: 7,
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainFeature;
