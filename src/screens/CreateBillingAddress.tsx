import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import React, {useState} from 'react';

const markers = [
  {latitude: 37.78825, longitude: -122.4324},
  {latitude: 37.78825, longitude: -122.4324},
  {latitude: 37.78825, longitude: -122.4324},
  //coordinate
];
// Using Map
const CreateBillingAddress = () => {
  const [region] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        {markers.map(marker => {
          return <Marker coordinate={marker} key={Math.random()} />;
        })}
      </MapView>
    </View>
  );
};

export default CreateBillingAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
