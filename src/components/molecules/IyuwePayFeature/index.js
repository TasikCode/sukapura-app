import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const IyuwePayFeature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity>
        <Image source={props.img} />
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginTop: 3,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default IyuwePayFeature;
