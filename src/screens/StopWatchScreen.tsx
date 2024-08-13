import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomButton from 'rm-ui-widget/src/Button/CustomButton';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LARGE_PRIMARY = 'largePrimary',
  LARGE_SECONDARY = 'largeSecondary',
  LINK = 'link',
}
const StopWatchScreen = () => {
  // hh: mm.ss
  const [isActive, setIsActive] = useState(false);
  //   const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    var interval: string | number | NodeJS.Timeout | undefined;

    if (isActive === true) {
      interval = setInterval(() => {
        setTime(value => value + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const onStartAndStopAction = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</Text>
        <Text>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</Text>
        <Text>{('0' + ((time / 10) % 100)).slice(-2)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton type={ButtonType.PRIMARY} onPress={onStartAndStopAction}>
          <Text>Start</Text>
        </CustomButton>
        <CustomButton
          type={ButtonType.SECONDARY}
          onPress={onStartAndStopAction}>
          <Text>Stop</Text>
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timerContainer: {
    flex: 3,
    flexDirection: 'row',
    rowGap: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10,
    columnGap: 25,
  },
});
export default StopWatchScreen;
