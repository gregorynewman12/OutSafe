import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {RootStackParamList} from '../App';
import {setCustom} from '../utils/api';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ScreenOne'>;
}

const ScreenTwo = ({navigation}: Props) => {
  const [text, onChangeText] = useState('');
  const swipe = Gesture.Pan()
    .minDistance(10)
    .failOffsetY([-10, 10])
    .failOffsetX(-10)
    .onStart(() => navigation.navigate('ScreenOne'));

  const sendCustom = () => {
    setCustom(text);
  };
  return (
    <GestureDetector gesture={swipe}>
      <View style={styles.page}>
        <TextInput
          style={styles.textBox}
          value={text}
          onChangeText={onChangeText}
        />
        <View style={styles.executeButtonWrapper}>
          <Pressable
            onPress={sendCustom}
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
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  },
  textBox: {
    borderWidth: 1,
    margin: 40,
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

export default ScreenTwo;
