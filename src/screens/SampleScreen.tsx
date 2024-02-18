import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

// This screen is being used to show memoize component
// Example: How to stop re-render component is props is not getting changed
const SampleScreen = () => {
  console.log('Sample screen');
  return (
    <View style={styles.container}>
      <Text>Memo Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
export default React.memo(SampleScreen);
