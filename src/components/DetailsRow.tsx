import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {FC} from 'react';

interface Props {
  userData: string;
  onPresshandler: () => void;
}

const DetailsRow: FC<Props> = ({userData, onPresshandler}) => {
  return (
    <Pressable onPress={onPresshandler}>
      <View style={styles.rowStyle}>
        <Text>{userData}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});

export default DetailsRow;
