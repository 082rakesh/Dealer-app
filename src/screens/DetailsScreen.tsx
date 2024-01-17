import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useCounter from '../utils/hooks/useCounter';
import {useQuery} from 'react-query';
import {getUserList} from '../networking/Service';
import {Users} from '../networking/Data/User';
import Loader from '../components/Loader';

const DetailsScreen = () => {
  const {count, increment, decrement} = useCounter();

  const {isLoading, isError, data, error} = useQuery<Users>(
    'users',
    getUserList,
  );

  console.log(
    'query data ' + data?.map(user => console.log(user.name.firstname)),
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text>Number is - {count}</Text>
        <Pressable onPress={increment}>
          <Text>Increment</Text>
        </Pressable>
        <Pressable onPress={decrement}>
          <Text>Decement</Text>
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={data}
            renderItem={itemData => {
              return <Text>{itemData.item.name.firstname}</Text>;
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: 'green',
  },
});

export default DetailsScreen;
