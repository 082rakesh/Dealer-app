import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const CustomStopWatch = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    var interval: string | number | NodeJS.Timeout | undefined;
    if (isStarted) {
      interval = setInterval(() => {
        setTimer(value => value + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted]);

  const onStartAndStopAction = () => {
    console.log('onStartAction');
    setIsStarted(!isStarted);
  };

  return (
    <>
      <View style={styles.topContainer}>
        <Text>{('0' + Math.floor((timer / 60000) % 60)).slice(-2)}:</Text>
        <Text>{('0' + Math.floor((timer / 1000) % 60)).slice(-2)}.</Text>
        <Text>{('0' + ((timer / 10) % 100)).slice(-2)}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={onStartAndStopAction}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onStartAndStopAction}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 3,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 5,
  },
  button: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
    margin: 15,
    backgroundColor: 'gray',
    height: 80,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomStopWatch;
