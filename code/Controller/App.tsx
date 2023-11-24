/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import DrillButton from './components/drill';
import ExitButton from './components/exit';
import SafeButton from './components/safe';
import SIPButton from './components/sip';

enum Buttons {
  Safe = 'Safe',
  Drill = 'Drill',
  SIP = 'Shelter in Place',
  Exit = 'Exit',
}

function App(): JSX.Element {
  const [drill, setDrill] = useState(false);
  const [button, setButton] = useState<Buttons>();
  return (
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
  );
}

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

export default App;
export {Buttons};
