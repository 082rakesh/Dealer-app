import {StyleSheet, View} from 'react-native';
import SignupInput from '../components/TextInputWithHeader';
import {FC} from 'react';
import React from 'react';
// import {useAppNavigation} from '../utils/useAppNavigation';

const SignUpScreen: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <SignupInput header="Enter Name" placeHolder="Enter name here" />
        <SignupInput header="Enter Phone" placeHolder="Enter phone here" />
        <SignupInput header="Enter Email" placeHolder="Enter email here" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    margin: 10,
  },
});
export default SignUpScreen;
