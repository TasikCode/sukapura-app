import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const MainFeature = props => {
  return (
    <View style={{width: '25.5%', alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
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
          <Image source={props.img} />
        </View>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            marginTop: 6,
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainFeature;
