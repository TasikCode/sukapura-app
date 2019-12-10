import React from 'react';
import {Text, View} from 'react-native';

const IconWithText = () => {
  return (
    <View>
      <View />
      <Text>Nomer Telpon</Text>
    </View>
  );
};

const IconAction = () => {
  return (
    <View>
      <Text>i</Text>
    </View>
  );
};

const ScanQode = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <IconAction />
          <View>
            <IconAction />
            <IconAction />
          </View>
        </View>
      </View>
      <View style={{height: 150, backgroundColor: 'red'}}>
        <View>
          <Text>More</Text>
          <Text>Shortcut</Text>
        </View>
        <View>
          <View>
            <IconWithText />
            <IconWithText />
          </View>
          <Text>
            Angge iYeuWe , Kangge Bayar Naon Wae Di Dieu. Haratis Teu Angge
            Admin!!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScanQode;
