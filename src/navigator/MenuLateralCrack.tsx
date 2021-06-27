import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="SettingsScreen"
//                 component = { SettingsScreen }
//             />
//         </Stack.Navigator>
//     )
// }
export const MenulateralCrack= () => {
    const {width } = useWindowDimensions();

    return (
    <Drawer.Navigator
        drawerType= { width >= 768 ? 'permanent':'front'}
        drawerContent= {(props) => <MenuInterno {...props}/>}
    >
        <Drawer.Screen name="StackNavigator"  component={ StackNavigator } />
        <Drawer.Screen name="SettingsScreen"  component={ SettingsScreen } />
    </Drawer.Navigator>
    );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (

        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={ styles.avatarContainer}>
                <Image
                    source={{
                        uri:"https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
                    }}
                    style={ styles.avatar}
                />
            </View>
        {/* opciones de menu */}

        <View style={styles.menuContainer}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('StackNavigator')}
            style={styles.menuboton}>
                <Text style={styles.menuTexto} > Navegacion Stack</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('SettingsScreen')}
            style={styles.menuboton}>
                <Text style={styles.menuTexto}> Ajustes</Text>
            </TouchableOpacity>
        </View>
        </DrawerContentScrollView>
    );
}