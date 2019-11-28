import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';
import NusaenaSection from '../../organism/NusaenaSection';
import {withNavigation} from 'react-navigation';
import RBSheet from 'react-native-raw-bottom-sheet';

class MainSection extends Component {
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
            title="SukaOjeg"
            backgroundColor={'#F03832'}
            onPress={() => this.props.navigation.navigate('SukaOjeg')}
          />
          <MainFeature
            title="SukaMobil"
            Icon
            active
            name="airplane"
            backgroundColor={'#F17000'}
            onPress={() => this.props.navigation.navigate('SukaMobil')}
          />
          <MainFeature
            title="SukaLapar"
            backgroundColor={'#64DD17'}
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
