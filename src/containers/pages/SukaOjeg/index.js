import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import geolocation from '@react-native-community/geolocation';
// import SearchPlaces from '../../../components/molecules/SearchPlaces';
// Component
const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.002,
  longitudeDelta: 0.002,
};

const SukaOjeg = () => {
  const [curentPisition, setCurentPosition] = useState(initialState);
  useEffect(() => {
    geolocation.getCurrentPosition(
      position => {
        // alert(JSON.stringify(position));
        const {longitude, latitude} = position.coords;
        setCurentPosition({
          ...curentPisition,
          latitude,
          longitude,
        });
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return curentPisition.latitude ? (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={curentPisition}
        showsUserLocation={true}
        loadingEnabled={true}></MapView>
      {/* <SearchPlaces /> */}
    </View>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
};

export default SukaOjeg;
