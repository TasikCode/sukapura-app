import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const IyuwePayFeature = props => {
  return (
    <View style={{width: '25%', alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img} />
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginTop: 7,
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default IyuwePayFeature;
