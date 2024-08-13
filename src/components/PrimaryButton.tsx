import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface Props {
  title: string;
  onPressHandler: () => void;
}

const PrimaryButton: FC<Props> = ({title, onPressHandler}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPressHandler}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#a055f5',
    width: '85%',
    height: 45,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PrimaryButton;
