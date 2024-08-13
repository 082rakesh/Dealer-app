import LoginScreen from '../screens/LoginScreen.tsx';
import SignUpScreen from '../screens/SignUpScreen.tsx';
import AddSkillsScreen from '../screens/AddSkillsScreen.tsx';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen.tsx';
import CreateBillingAddress from '../screens/CreateBillingAddress.tsx';
import MultipleAPIScreen from '../screens/MultipleAPIScreen.tsx';
import StopWatchScreen from '../screens/StopWatchScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';
import CustomStopWatch from '../screens/CustomStopWatch.tsx';

import React from 'react';

export type screenOptions = {
  gestureEnabled: false;
  headerShown: false;
};

export type RootStackParamList = {
  Login: NavigatorScreenParams<OnboardingStackParamList>;
};

export type OnboardingStackParamList = {
  LoginScreen: undefined;
  StopWatchScreen: undefined;
  SignUpScreen: undefined;
  AddSkillsScreen: undefined;
  DetailsScreen: undefined;
  MultipleAPIScreen: undefined;
  HomeScreen: undefined;
  CustomStopWatchScreen: undefined;
  CreateBillingAddress: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const LoginStack = createNativeStackNavigator<OnboardingStackParamList>();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: true}}>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <LoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <LoginStack.Screen name="AddSkillsScreen" component={AddSkillsScreen} />
      <LoginStack.Screen name="DetailsScreen" component={DetailsScreen} />
      <LoginStack.Screen
        name="CreateBillingAddress"
        component={CreateBillingAddress}
      />
      <LoginStack.Screen
        name="MultipleAPIScreen"
        component={MultipleAPIScreen}
      />
      <LoginStack.Screen name="StopWatchScreen" component={StopWatchScreen} />
      <LoginStack.Screen name="HomeScreen" component={HomeScreen} />
      <LoginStack.Screen
        name="CustomStopWatchScreen"
        component={CustomStopWatch}
      />
    </LoginStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Login" component={LoginNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
