/* eslint-disable eqeqeq */
import {StyleSheet, View, FlatList, Text, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import SkillRow from '../components/SkillRow';
import SkillInput from '../components/SkillInput';
import PrimaryButton from '../components/PrimaryButton';
import {useAppNavigation} from '../navigator/useAppNavigation';
// import {UserContext} from '../utils/context.js/UserContext';
interface SkillType {
  text: string;
  id: string;
}

const AddSkillsScreen = () => {
  const [addedSkills, setAddedSkills] = useState<SkillType[]>([]);
  const colorScheme = useColorScheme();

  const navigation = useAppNavigation();

  // const user = useContext(UserContext);
  // console.log('user' + user.loggedInUser);

  const onAddSkillHandler = (enteredSkill: string) => {
    setAddedSkills(currentAddedSkills => [
      ...currentAddedSkills,
      {text: enteredSkill, id: Math.random().toString()},
    ]);
  };

  const onDeleteHandler = (id: string) => {
    setAddedSkills(currentAddedSkill => {
      return currentAddedSkill.filter(skill => skill.id != id);
    });
  };

  const moveToDetails = () => {
    navigation.navigate('Login', {
      screen: 'DetailsScreen',
    });
  };

  return (
    <View
      style={
        colorScheme === 'light'
          ? styles.mainContainer
          : styles.darkModeBackground
      }>
      <View
        style={
          colorScheme === 'light'
            ? styles.topContainer
            : styles.darkModeBackground
        }>
        <SkillInput onAddSkillHandler={onAddSkillHandler} />
        <PrimaryButton
          title={'Move to Details'}
          onPressHandler={moveToDetails}
        />
      </View>
      <Text>useColorScheme(): {colorScheme}</Text>

      <View style={styles.listContainer}>
        <FlatList
          data={addedSkills}
          renderItem={itemData => {
            return (
              <SkillRow
                SkillType={itemData.item}
                onDelete={() => onDeleteHandler(itemData.item.id)}
              />
            );
          }}
          keyExtractor={item => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

export default AddSkillsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 2,
  },
  RowCellStyle: {
    height: 40,
    margin: 5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#cccccc',
  },
  darkModeBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.6,
  },
});
