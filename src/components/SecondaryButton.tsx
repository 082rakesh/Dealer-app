import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import React, {FC} from 'react';
interface Props {
  title: string;
  onPressHandler: () => {};
}

const SecondaryButton: FC<Props> = ({title}) => {
  const onPresshandler = () => {
    console.log('user pressed');
  };

  return (
    <>
      {console.log('secondary button redered')}
      <TouchableHighlight
        style={styles.buttonStyle}
        activeOpacity={1.0}
        underlayColor="white"
        onPress={onPresshandler}>
        <Text>{title}</Text>
      </TouchableHighlight>
    </>
  );
};

export default React.memo(SecondaryButton);

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'flex-end',
  },
});
