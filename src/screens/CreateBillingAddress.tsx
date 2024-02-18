import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';

// Using Map
const CreateBillingAddress = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
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
