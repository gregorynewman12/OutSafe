import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

enum ButtonColors {
  Green = 'Green',
  Blue = 'Blue',
  Yellow = 'Yellow',
  Red = 'Red',
}

const ColorKeys = {
  Green: '#00FF00',
  Blue: '#5555FF',
  Yellow: '#BBBB00',
  Red: '#FF0000',
};

const RoundButton = (props: {
  color: ButtonColors;
  text: string;
  selected: boolean;
  clickHandler?: () => void;
}) => {
  return (
    <View>
      <Pressable
        onPress={props.clickHandler}
        style={[
          {
            backgroundColor: props.selected ? 'white' : ColorKeys[props.color],
            borderColor: props.selected ? ColorKeys[props.color] : 'black',
          },
          styles.roundButton,
        ]}>
        <Text
          style={[
            {color: props.selected ? ColorKeys[props.color] : 'black'},
            styles.buttonText,
          ]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    borderRadius: 50,
    borderWidth: 2,
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
});

export {RoundButton, ButtonColors};
