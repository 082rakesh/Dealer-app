import {Pressable, StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';

const AddSkillsScreen = () => {
  const [enteredSkill, setEnteredSkill] = useState('');
  const [addedSkills, setAddedSkills] = useState<['']>();

  const onSkillInputhandler = (skill: React.SetStateAction<string>) => {
    setEnteredSkill(skill);
  };

  const onAddSkillHandler = () => {
    console.log(enteredSkill);
    setAddedSkills({
      ...addedSkills,
      enteredSkill,
    });
    setEnteredSkill('');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          value={enteredSkill}
          onChangeText={onSkillInputhandler}
        />
        <Pressable onPress={onAddSkillHandler}>
          <Text>Add Skills</Text>
        </Pressable>
      </View>
      <View style={styles.listContainer} />
    </View>
  );
};

export default AddSkillsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listContainer: {
    flex: 2,
    backgroundColor: 'red',
  },
  textInputStyle: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    height: 42,
    marginLeft: 10,
  },
});
