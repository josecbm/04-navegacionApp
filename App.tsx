import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { MenulateralCrack } from './src/navigator/MenuLateralCrack';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MenulateralCrack/>
      {/* <Tabs/> */}
    </NavigationContainer>
  )
}
export default App;