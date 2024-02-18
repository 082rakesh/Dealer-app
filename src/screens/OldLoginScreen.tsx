import React, {FC, useCallback, useRef} from 'react';
import {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppNavigation} from '../navigator/useAppNavigation';

const OldLoginScreen: FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isEmpty] = useState(false);

  const inputRef = useRef(null);
  const navigation = useAppNavigation();

  const forgetActionHandler = useCallback(() => {
    console.log('forget password pressed');
  }, []);

  const signUpAction = useCallback(() => {
    navigation.navigate('Login', {screen: 'SignUpScreen'});
  }, [navigation]);

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
          placeholder="Enter old email"
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
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={forgetActionHandler}>
          <Text>Forget your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={signUpAction}>
          <Text>Don't have an account? Sign up</Text>
        </TouchableOpacity>
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
  logoStyle: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
  buttonStyle: {
    alignSelf: 'flex-end',
  },
});
export default OldLoginScreen;
