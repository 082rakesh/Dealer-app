/* eslint-disable eqeqeq */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import SkillRow from '../components/SkillRow';
import SkillInput from '../components/SkillInput';
import PrimaryButton from '../components/PrimaryButton';
import {useAppNavigation} from '../navigator/useAppNavigation';
interface SkillType {
  text: string;
  id: string;
}

const AddSkillsScreen = () => {
  const [addedSkills, setAddedSkills] = useState<SkillType[]>([]);

  const navigation = useAppNavigation();

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
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <SkillInput onAddSkillHandler={onAddSkillHandler} />
        <PrimaryButton
          title={'Move to Details'}
          onPressHandler={moveToDetails}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={addedSkills}
          renderItem={itemData => {
            return (
              <SkillRow SkillType={itemData.item} onDelete={onDeleteHandler} />
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
});
