import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler()
  .configure({name: 'React Native Demo'}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
