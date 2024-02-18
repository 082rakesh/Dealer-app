import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

const withHeader = WrappedComponent => {
  return class NewComponent extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>Welcome to Dealer</Text>
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  };
};

export default withHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    backgroundColor: 'yellow',
    textAlign: 'center',
  },
});
