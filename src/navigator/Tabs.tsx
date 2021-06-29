import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS/>
        : <TabsIOS/>
}

const BottomTabIOS = createBottomTabNavigator();
export const  TabsIOS= () => {
    return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions = {{
            activeTintColor: colores.primary,
            style: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            labelStyle:{
                fontSize: 13,
            }
        }}
        screenOptions= {({route})=>({
            tabBarIcon: ({color,focused,size}) =>{
                let iconName: string = ''
                console.log(route.name);
                switch(route.name){
                    case 'Tab1Screen':
                        iconName = 'T1'
                        break;
                    case 'Tab2Screen':
                        iconName = 'T2'
                        break;  
                    case 'Tab3Screen':
                        iconName = 'T3'
                        break;
                    case 'StackNavigator':
                        iconName = 'St'
                    break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
    >
        {/* <Tab.Screen name="Tab1Screen" options={{title:"Facturas", tabBarIcon: (props) => <Text style={{color: props.color}}> T1 </Text>}} component={Tab1Screen} /> */}
        <BottomTabIOS.Screen name="Tab2Screen" options={{title:"Productos"}} component={Tab2Screen} />
        <BottomTabIOS.Screen name="Tab1Screen" options={{title:"Facturas"}} component={Tab1Screen} />
        <BottomTabIOS.Screen name="Tab3Screen" options={{title:"Categorias"}} component={Tab3Screen} />
        <BottomTabIOS.Screen name="StackNavigator" options={{title:"Configuracion"}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
    );
}