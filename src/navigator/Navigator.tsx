/* eslint-disable react/react-in-jsx-scope */
import LoginScreen from '../screens/LoginScreen.tsx';
import SignUpScreen from '../screens/SignUpScreen.tsx';
import AddSkillsScreen from '../screens/AddSkillsScreen.tsx';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type screenOptions = {
  gestureEnabled: false;
  headerShown: false;
};

export type RootStackParamList = {
  Login: NavigatorScreenParams<OnboardingStackParamList>;
};

export type OnboardingStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  AddSkillsScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const LoginStack = createNativeStackNavigator<OnboardingStackParamList>();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: true}}>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <LoginStack.Screen name="AddSkillsScreen" component={AddSkillsScreen} />
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