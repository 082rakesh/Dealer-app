import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import useCounter from '../utils/hooks/useCounter';
import {useQuery} from 'react-query';
import {getUserList} from '../networking/Service';
import {Users} from '../networking/Data/User';
import Loader from '../components/Loader';
import DetailsRow from '../components/DetailsRow';
import {StaticContent} from '../utils/constants/stringConstant';
import {useAppNavigation} from '../navigator/useAppNavigation';
import SampleScreen from './SampleScreen';
import withHeader from '../utils/HOC/withHeader';
import React from 'react';

const DetailsScreen = () => {
  const {count, increment, decrement} = useCounter();

  const {isLoading, data} = useQuery<Users>('users', getUserList);

  // console.log(
  //   'query data ' + data?.map(user => console.log(user.name.firstname)),
  // );

  const navigation = useAppNavigation();

  const didSelectRow = () => {
    navigation.navigate('Login', {
      screen: 'CreateBillingAddress',
    });
    console.log('navigate to CreateBillingAddress');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text>
          {StaticContent.NUMBER_HEADER} {count}
        </Text>
        <Pressable onPress={increment}>
          <Text>{StaticContent.INCREMENT}</Text>
        </Pressable>
        <Pressable onPress={decrement}>
          <Text>{StaticContent.DECREMENT}</Text>
        </Pressable>
        <SampleScreen />
      </View>
      <View style={styles.bottomContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={data}
            renderItem={itemData => {
              return (
                <DetailsRow
                  userData={itemData.item.name.firstname}
                  onPresshandler={didSelectRow}
                />
              );
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

export default withHeader(DetailsScreen);
