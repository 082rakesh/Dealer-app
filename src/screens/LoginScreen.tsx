import React, {FC, useCallback, useRef} from 'react';
import {useState, useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useAppNavigation} from '../navigator/useAppNavigation';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import LogoImage from '../components/LogoImage';
import useToggle from '../utils/hooks/useToggles';
import {UserContext} from '../utils/context.js/UserContext';

const LoginScreen: FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [value] = useToggle(false);

  const {setUserName} = useContext(UserContext);

  const inputRef = useRef(null);
  const navigation = useAppNavigation();

  // const forgetActionHandler = () => {
  //   console.log('forget password pressed');
  // };

  const forgetActionHandler = useCallback(() => {
    console.log('forget password pressed');
  }, []);

  const signUpAction = useCallback(() => {
    navigation.navigate('Login', {screen: 'SignUpScreen'});
  }, [navigation]);

  const validateLogin = () => {
    if (emailValue.length === 0 || passwordValue.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setUserName(emailValue);
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

  /*
  // TODO: This code is written to validate & test useMemo

  function heavyComputation2(value: number) {
    const complexvalue = useMemo(() => {
      let sum = 0
      for(let index = 0; index<value; index++) {
        sum = sum + index
      }
      console.log('heavyComputation1 sum1 is ->' + sum)
    }, [value])
  }

  function heavyComputation(value: number) {
    let sum = 0

    for(let index = 0; index<value; index++) {
      sum = sum + index
    }

    console.log('heavyComputation sum is ->' + sum)
  }

  heavyComputation(100000)
  heavyComputation2(1000000)
  */

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <LogoImage
          imageSource={require('../assets/images/logo.png')}
          isFooter={true}
          footerTitle="Welcome back"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter email"
          ref={inputRef}
          value={emailValue}
          onChangeText={text => setEmailValue(text)}
          onSubmitEditing={
            emailValue.length <= 0
              ? console.log('Please enter valid email')
              : console.log('Entered valid email')
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          ref={inputRef}
          value={passwordValue}
          onChangeText={val => setPasswordValue(val)}
        />
        {isEmpty ? (
          <Text style={styles.error}>
            Please enter a valid Email and Password
          </Text>
        ) : (
          <></>
        )}
        <SecondaryButton
          title={value ? 'Forget your password?' : 'Forget Password?'}
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
  error: {
    alignSelf: 'flex-start',
    color: 'red',
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default LoginScreen;
