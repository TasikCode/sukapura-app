import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';
import NusaenaSection from '../../organism/NusaenaSection';
import {withNavigation} from 'react-navigation';
import RBSheet from 'react-native-raw-bottom-sheet';

class MainSection extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 25}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 35,
          }}>
          {/* Main 1 */}
          <MainFeature
            title="SukaOjeg"
            backgroundColor={'#800000'}
            onPress={() => this.props.navigation.navigate('SukaOjeg')}
          />
          <MainFeature
            title="SukaMobil"
            Icon
            active
            name="airplane"
            backgroundColor={'#F0E68C'}
            onPress={() => this.props.navigation.navigate('SukaMobil')}
          />
          <MainFeature
            title="SukaLapar"
            backgroundColor={'#E6E6FA'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <MainFeature
            onPress={() => {
              this.RBSheet.open();
            }}
            title="SukaWedding"
            backgroundColor={'#FFB6C1'}
          />
        </View>
        {/* Main 2 */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 12,
          }}>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={300}
            duration={250}
            customStyles={{
              container: {
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}>
            <NusaenaSection />
          </RBSheet>
          <MainFeature
            title="SukaHajatan"
            backgroundColor={'#87CEEB'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <MainFeature
            title="KarasaBagdja"
            Icon
            active
            name="airplane"
            backgroundColor={'#98FB98'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <MainFeature
            title="SukaArisan"
            backgroundColor={'#F4A460'}
            onPress={() => alert('Dalam Pengembangan')}
          />
          <MainFeature
            onPress={() => {
              this.RBSheet.open();
            }}
            title="Nusaena"
            backgroundColor={'#18B3C2'}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(MainSection);
