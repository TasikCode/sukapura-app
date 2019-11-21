import React from 'react';
import {View, Image, Text} from 'react-native';

const IyuwePayFeature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.img} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          marginTop: 3,
        }}>
        {props.title}
      </Text>
    </View>
  );
};
export default IyuwePayFeature;
