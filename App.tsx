/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigator/Navigator';
import {QueryClientProvider, QueryClient} from 'react-query';
import {UserContext} from './src/utils/context.js/UserContext';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    const data = {
      name: 'DefaultUser',
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default App;
