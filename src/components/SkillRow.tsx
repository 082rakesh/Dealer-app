import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface SkillType {
  text: string;
  id: string;
}

interface Props {
  SkillType: SkillType;
  onDelete: (arg0: string) => void;
}

const SkillRow: FC<Props> = ({SkillType, onDelete}) => {
  return (
    <Pressable onPress={onDelete.bind(this, SkillType.id)}>
      <View style={styles.RowCellStyle}>
        <Text>{SkillType.text}</Text>
      </View>
    </Pressable>
  );
};

export default SkillRow;

const styles = StyleSheet.create({
  RowCellStyle: {
    height: 40,
    margin: 5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#cccccc',
  },
});
