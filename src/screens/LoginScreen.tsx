import React, {FC, useRef} from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useAppNavigation} from '../navigator/useAppNavigation';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const LoginScreen: FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const inputRef = useRef(null);
  const navigation = useAppNavigation();

  const forgetActionHandler = () => {
    console.log('forget password pressed');
  };

  const signUpAction = () => {
    navigation.navigate('Login', {
      screen: 'SignUpScreen',
    });
  };

  const validateLogin = () => {
    if (emailValue.length === 0 || passwordValue.length === 0) {
      console.log('Please enter valid name and password');
    } else {
      loginHandler();
    }
  };

  const loginHandler = () => {
    navigation.navigate('Login', {
      screen: 'AddSkillsScreen',
    });
    setEmailValue('');
    setPasswordValue('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoStyle}
          resizeMode="contain"
          source={require('../assets/images/logo.png')}
        />
        <Text>Welcome back</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter email"
          ref={inputRef}
          value={emailValue}
          onChangeText={text => setEmailValue(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          ref={inputRef}
          value={passwordValue}
          onChangeText={val => setPasswordValue(val)}
        />
        <SecondaryButton
          title="Forget your password?"
          onPressHandler={forgetActionHandler}
        />
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton title="Login" onPressHandler={validateLogin} />
        <SecondaryButton
          title="Don't have an account? Sign up"
          onPressHandler={signUpAction}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 4,
    paddingBottom: 5,
  },
  logoContainer: {
    flex: 2,
    flexDirection: 'column',
    paddingTop: 50,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '85%',
    height: 45,
    padding: 5,
    marginBottom: 16,
  },
  logoStyle: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
});
export default LoginScreen;
