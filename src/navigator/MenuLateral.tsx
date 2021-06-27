import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
const Drawer = createDrawerNavigator();

export const MenuLateral= () => {
    return (
    <Drawer.Navigator
        drawerPosition='left'
    >
        <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={ StackNavigator} />
        <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
    );
}