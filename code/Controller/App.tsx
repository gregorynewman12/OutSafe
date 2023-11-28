/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ScreenOne from './screens/screen1';
import ScreenTwo from './screens/screen2';

type RootStackParamList = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {/* Options for the screens are found at: https://reactnavigation.org/docs/stack-navigator/#options */}
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
export type {RootStackParamList};
