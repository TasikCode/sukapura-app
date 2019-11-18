import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const NusaenaFeature = props => {
  return (
    <View style={{width: '25%', alignItems: 'center'}}>
      <View
        style={{
          width: 45,
          height: 45,
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
      <Text
        style={{
          fontSize: 10,
          textAlign: 'center',
          marginTop: 7,
          fontWeight: 'bold',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NusaenaFeature;
