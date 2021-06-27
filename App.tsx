import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral/>
    </NavigationContainer>
  )
}
export default App;