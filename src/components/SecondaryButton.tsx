import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import React, {FC} from 'react';

interface Props {
  title: string;
  onPressHandler: () => {};
}

const SecondaryButton: FC<Props> = ({title, onPressHandler}) => {
  return (
    <TouchableHighlight
      style={{alignSelf: 'center'}}
      activeOpacity={1.0}
      underlayColor="white"
      onPress={onPressHandler}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({});
