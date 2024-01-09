/* eslint-disable eqeqeq */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import SkillRow from '../components/SkillRow';
import SkillInput from '../components/SkillInput';
interface SkillType {
  text: string;
  id: string;
}

const AddSkillsScreen = () => {
  const [addedSkills, setAddedSkills] = useState<SkillType[]>([]);

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

  return (
    <View style={styles.mainContainer}>
      <SkillInput onAddSkillHandler={onAddSkillHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={addedSkills}
          renderItem={itemData => {
            return (
              <SkillRow SkillType={itemData.item} onDelete={onDeleteHandler} />
            );
          }}
          keyExtractor={(item, index) => {
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
