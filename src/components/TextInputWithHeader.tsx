import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {FC} from 'react';

interface Props {
  header: string;
  placeHolder: string;
}

const SignupInput: FC<Props> = ({header, placeHolder}) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <TextInput style={styles.textInputStyle} placeholder={placeHolder} />
    </View>
  );
};

export default SignupInput;

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '85%',
    height: 40,
    padding: 4,
    marginBottom: 10,
  },
  headerStyle: {
    width: '85%',
    marginBottom: 2,
  },
});
