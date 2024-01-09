import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, {FC, useState} from 'react';

interface Props {
  onAddSkillHandler: (arg0: string) => void;
}
const SkillInput: FC<Props> = ({onAddSkillHandler}) => {
  const [enteredSkill, setEnteredSkill] = useState('');

  const onSkillInputhandler = (skill: React.SetStateAction<string>) => {
    setEnteredSkill(skill);
  };

  function onSkillHandler() {
    onAddSkillHandler(enteredSkill);
    setEnteredSkill('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInputStyle}
        value={enteredSkill}
        onChangeText={onSkillInputhandler}
      />
      <Pressable onPress={onSkillHandler}>
        <Text>Add Skills</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInputStyle: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    height: 42,
    marginLeft: 10,
  },
});
export default SkillInput;
