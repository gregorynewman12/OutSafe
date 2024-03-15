import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {RootStackParamList} from '../App';
import DrillButton from '../components/drill';
import ExitButton from '../components/exit';
import SafeButton from '../components/safe';
import SIPButton from '../components/sip';
import {Buttons} from '../data/buttons';
import {getStatus, setStatus} from "../utils/api";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ScreenOne'>;
}

const ScreenOne = ({navigation}: Props) => {
  const [drill, setDrill] = useState(false);
  const [button, setButton] = useState<Buttons>();
  const swipe = Gesture.Pan()
    .minDistance(10)
    .failOffsetY([-10, 10])
    .failOffsetX(10)
    .onStart(() => navigation.navigate('ScreenTwo'));

  const executeMessage = () => {
    if (button && button != Buttons.Drill) {
      setStatus(button, drill);
    }
  }

  return (
    <GestureDetector gesture={swipe}>
      <View style={styles.page}>
        <View style={styles.buttons}>
          <SafeButton button={button} setButton={setButton} />
          <DrillButton drill={drill} setDrill={setDrill} />
          <SIPButton button={button} setButton={setButton} />
          <ExitButton button={button} setButton={setButton} />
        </View>
        <Text style={styles.text}>
          {button
            ? drill && button !== Buttons.Safe
              ? `Drill for ${button} option is selected.`
              : `${button} option is selected.`
            : ''}
        </Text>
        <View style={styles.executeButtonWrapper}>
          <Pressable
              onPress={executeMessage}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'transparent' : 'lightgray',
                borderColor: pressed ? 'black' : 'lightgray',
              },
              styles.executeButton,
            ]}>
            <Text style={styles.executeButtonText}>Execute</Text>
          </Pressable>
        </View>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 34,
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  },
  executeButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  executeButton: {
    borderWidth: 3,
    padding: 10,
    borderRadius: 5,
  },
  executeButtonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default ScreenOne;
