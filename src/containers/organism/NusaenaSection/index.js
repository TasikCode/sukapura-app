import React, {Component} from 'react';
import {View} from 'react-native';
import NusaenaFeature from '../../../components/molecules/NusaenaFeature';

class NusaenaSection extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 14}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 35,
          }}>
          <NusaenaFeature
            title="SukaPelaminan"
            backgroundColor={'#734b6d'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <NusaenaFeature
            title="SukaHajatan"
            backgroundColor={'#FD746C'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <NusaenaFeature
            title="SukaKarasabagdja"
            backgroundColor={'#4CA1AF'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <NusaenaFeature
            title="SukaKreditEmas"
            backgroundColor={'#F56217'}
            onPress={() => alert('Dalam Pengembangan')}
          />
        </View>
        {/* 2 */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 12,
          }}>
          <NusaenaFeature
            title="SukaSepedahan"
            backgroundColor={'#F03832'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <NusaenaFeature
            title="SukaPangaosan"
            backgroundColor={'#3a7bd5'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <NusaenaFeature
            title="SukaSedekah"
            backgroundColor={'#FFC371'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <NusaenaFeature
            title="SukaBelanja"
            backgroundColor={'#EF629F'}
            onPress={() => alert('Dalam Pengembangan')}
          />
        </View>
      </View>
    );
  }
}

export default NusaenaSection;
