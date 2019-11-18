import React from 'react';
import {View, TextInput, Image} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{marginRight: 17, marginLeft: 17, flexDirection: 'row'}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="Bade Tuang Naon Dinten Ieu?"
          style={{
            borderWidth: 1,
            borderColor: '#e8e8e8',
            borderRadius: 25,
            height: 41,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            backgroundColor: 'white',
            marginRight: 18,
            // elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: {x: 0, y: 0},
            shadowRadius: 15,
          }}
        />
        <Image
          source={require('../../../assets/icon/search.png')}
          style={{position: 'absolute', top: 5, left: 12}}
        />
      </View>
      <View style={{width: 36, alignItems: 'center', justifyItem: 'center'}}>
        <Image source={require('../../../assets/icon/member27.png')} />
      </View>
    </View>
  );
};

export default SearchFeature;
