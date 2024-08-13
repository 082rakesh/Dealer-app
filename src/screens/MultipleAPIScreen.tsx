import {Text, View, StyleSheet, Image} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import axios from 'axios';
import PrimaryButton from '../components/PrimaryButton';
import DIAL from '../assets/images/dial.svg';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

interface routes {
  routeID: number;
}
const route: routes[] = [
  {routeID: 1},
  {routeID: 2},
  {routeID: -3},
  {routeID: 4},
  {routeID: 5},
];

const MultipleAPIScreen = () => {
  const postIDs = useMemo(() => {
    return [...route];
  }, []);

  // const fetchPost = async (id: number) => {
  //   try {
  //     const response = await axios.get(BASE_URL + id);
  //     const jsonResponse = await response.data;
  //     return jsonResponse;
  //   } catch (error) {
  //     console.log('error is -> ', error);
  //   }
  // };

  const fetchPost = async (id: number) => {
    try {
      const response = await axios.get(BASE_URL + id);
      const jsonResponse = await response.data;
      return jsonResponse;
    } catch (error) {
      console.log('error is -> ', error);
    }
  };

  const getPost = async (id: number) => {
    try {
      const response = await axios.get(BASE_URL + id);
      const jsonResponse = await response.data;
      return jsonResponse;
    } catch (error) {
      console.log('error is -> ', error);
    }
  };

  // const fetchPostSerializedUsingFor = useCallback(async (pIDs: routes[]) => {
  //   for (const id of pIDs) {
  //     await fetchPost(id.routeID);
  //   }
  //   console.log('print after fetch');
  // }, []);

  // This method will be used for fetch APIs concurrently where order is not defined.
  const fetchPostConcurrently = useCallback(async (pIDs: routes[]) => {
    // const posts = await Promise.all(
    //   pIDs.map(async id => fetchPost(id.routeID)),
    // );
    const posts = await Promise.allSettled([fetchPost(-1), getPost(2)]);
    console.log('print posts', posts, pIDs);
    // const promise2 = new Promise(resolve => setTimeout(resolve, 450, 'quick'));
    // const promise3 = new Promise(resolve => setTimeout(resolve, 500, 'slow'));
    // const promise1 = Promise.reject(0);
    // const promises = [promise1, promise2, promise3];
    // Promise.any(promises).then(value => console.log('value -> ', value));
  }, []);

  // const fetchPostConcurrentlyWithAllSetteled = useCallback(
  //   async (pIDs: routes[]) => {
  //     const posts = await Promise.allSettled(
  //       pIDs.map(async id => fetchPost(id.routeID)),
  //     );

  //     console.log('print posts', posts);
  //   },
  //   [],
  // );

  // Using for each: Never use forEach for async API call
  //   const useForEach = (pIDs: routes[]) => {
  //     pIDs.forEach(async id => {
  //       await fetchPost(id.routeID);
  //     });
  //     console.log('print after fetch');
  //   };

  // const fetchSerializedAPIUsingReduce = useCallback(async (pIDs: routes[]) => {
  //   await pIDs.reduce(async (acc, id) => {
  //     await acc;
  //     const post = await fetchPost(id.routeID);
  //     console.log('posts', post);
  //   }, Promise.resolve());
  // }, []);

  useEffect(() => {
    fetchPostConcurrently(postIDs);
  }, [fetchPostConcurrently, postIDs]);

  const buttonHandler = () => {
    console.log('buttonHandler');
  };
  return (
    <View style={styles.container}>
      <Text> This is a demo page to show multiple API</Text>
      <PrimaryButton title={'Click me'} onPressHandler={buttonHandler} />

      <DIAL width={100} height={100} />

      <Image
        style={styles.logoStyle}
        resizeMode="contain"
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoStyle: {
    marginTop: 15,
    width: 100,
  },
});

export default MultipleAPIScreen;
