import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{

};

export const Pagina1Screen = ({navigation}: Props) => {
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina1</Text>

            <Button
                title = "Ir a pagina 2"
                onPress={ ()=> navigation.navigate('Pagina2Screen')}
            ></Button>
            <Text>Navegar con argumentos</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen',{
                    id:1 ,
                    nombre: 'Pedro'
                })}
            >
                <Text>Pedro</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen',{
                    id:2 ,
                    nombre: 'Imara'
                })}
            >
                <Text>Imara</Text>
            </TouchableOpacity>
        </View>
    )
}
