import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
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
  const deleteHandler = () => {
    onDelete();
  };
  return (
    <View style={styles.RowCellStyle}>
      <Text style={styles.titleStyle}>{SkillType.text}</Text>
      <Pressable onPress={deleteHandler}>
        <Image
          resizeMode="center"
          style={styles.DeleteStyle}
          source={require('../assets/images/delete_icon.png')}
        />
      </Pressable>
    </View>
  );
};

export default SkillRow;

const styles = StyleSheet.create({
  RowCellStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    margin: 5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#cccccc',
    alignItems: 'center',
  },
  DeleteStyle: {
    flex: 1,
  },
  titleStyle: {
    flex: 2,
  },
});
