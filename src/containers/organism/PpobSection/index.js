import React, {Component} from 'react';
import {View} from 'react-native';
import PpobFeature from '../../../components/molecules/PpobFeatur';

class PpobSection extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 14}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 12,
          }}>
          <PpobFeature
            title="PLN POSPAID"
            backgroundColor={'#734b6d'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="PLN PREPAID"
            backgroundColor={'#FD746C'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="PDAM SUKAPURA"
            backgroundColor={'#4CA1AF'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="TELKOM GROUP"
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
          <PpobFeature
            title="BPJS"
            backgroundColor={'#F03832'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="PERPAJAKAN"
            backgroundColor={'#3a7bd5'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="BIZNET"
            backgroundColor={'#FFC371'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="PULSA"
            backgroundColor={'#EF629F'}
            onPress={() => alert('Dalam Pengembangan')}
          />
        </View>
        {/* 3 */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 12,
          }}>
          <PpobFeature
            title="GAMES"
            backgroundColor={'#F4E2D8'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="KUOTA INET"
            backgroundColor={'#C4E0E5'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="TIKET KERETA"
            backgroundColor={'#ff9068'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="TOP UP GOPAY"
            backgroundColor={'#2C7744'}
            onPress={() => alert('Dalam Pengembangan')}
          />
        </View>
        {/* 4 */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 12,
          }}>
          <PpobFeature
            title="PUSKESMAS"
            backgroundColor={'#8E0E00'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="PELAYANAN PUBLIK"
            backgroundColor={'#757519'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="KRITIK + SARAN"
            backgroundColor={'#BA8B02'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <PpobFeature
            title="PEKERJAAN UMUM"
            backgroundColor={'#833ab4'}
            onPress={() => alert('Dalam Pengembangan')}
          />
        </View>
      </View>
    );
  }
}

export default PpobSection;
