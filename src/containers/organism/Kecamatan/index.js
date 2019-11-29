import React, {Component} from 'react';
import {View} from 'react-native';
import KecamatanFeature from '../../../components/molecules/KecamatanFeature';
import {withNavigation} from 'react-navigation';

class Kecamatan extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 12,
          marginTop: 2,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 17,
            flexWrap: 'wrap',
          }}>
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanKawalu')}
            img={require('../../../assets/icon/Kawalu2.png')}
          />
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanCipedes')}
            img={require('../../../assets/icon/Cipedes2.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 17,
            flexWrap: 'wrap',
          }}>
          <KecamatanFeature
            onPress={() =>
              this.props.navigation.navigate('KecamatanBungursari')
            }
            img={require('../../../assets/icon/Bungursari2.png')}
          />
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanCibeureum')}
            img={require('../../../assets/icon/Cibeureum2.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 17,
            flexWrap: 'wrap',
          }}>
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanTawang')}
            img={require('../../../assets/icon/Tawang2.png')}
          />
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanCihideung')}
            img={require('../../../assets/icon/Cihideung2.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 17,
            flexWrap: 'wrap',
          }}>
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanIndihiang')}
            img={require('../../../assets/icon/Indihiang2.png')}
          />
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanTamansari')}
            img={require('../../../assets/icon/Tamansari2.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 17,
            flexWrap: 'wrap',
          }}>
          <KecamatanFeature
            onPress={() =>
              this.props.navigation.navigate('KecamatanMangkubumi')
            }
            img={require('../../../assets/icon/Mangkubumi2.png')}
          />
          <KecamatanFeature
            onPress={() => this.props.navigation.navigate('KecamatanPurbaratu')}
            img={require('../../../assets/icon/Purbaratu2.png')}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(Kecamatan);
