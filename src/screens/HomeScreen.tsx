import React from 'react';
import {View, FlatList} from 'react-native';
import DetailsRow from '../components/DetailsRow';
import {featureList} from '../utils/constants/FeatureData';
import {useAppNavigation} from '../navigator/useAppNavigation';

const HomeScreen = () => {
  const navigation = useAppNavigation();

  const onPressAction = (index: number) => {
    let routeName = '';
    switch (index) {
      case 0:
        routeName = 'StopWatchScreen';
        break;
      case 1:
        routeName = 'AddSkillsScreen';
        break;
      case 2:
        routeName = 'MultipleAPIScreen';
        break;
      case 3:
        routeName = 'DetailsScreen';
        break;
      case 4:
        routeName = 'CreateBillingAddress';
        break;
      case 5:
        routeName = 'CustomStopWatchScreen';
        break;
    }

    navigation.navigate(routeName);
  };

  return (
    <View>
      <FlatList
        data={featureList.features}
        renderItem={itemData => {
          return (
            <DetailsRow
              onPresshandler={() => onPressAction(itemData.index)}
              userData={itemData.item.name}
            />
          );
        }}
        keyExtractor={item => {
          return item.id;
        }}
      />
    </View>
  );
};

export default HomeScreen;
