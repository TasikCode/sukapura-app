import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const KecamatanFeature = props => {
  return (
    <View>
      <View style={{width: 190, height: 80, elevation: 5}}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={props.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KecamatanFeature;
