import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View ,TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{

// };
interface Props extends DrawerScreenProps<any, any>{

    };

export const Pagina1Screen = ({navigation}: Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button
                title="menu"
                onPress={ () => navigation.toggleDrawer()}
            />
        })
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1</Text>
            <Button
                title = "Ir a pagina 2"
                onPress={ ()=> navigation.navigate('Pagina2Screen')}
            ></Button>
            <Text style={{
                marginVertical: 20,
                fontSize: 25,
            }}>Navegar con argumentos</Text>
            <View
                style = {{flexDirection: 'row'}}
            >
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id:1 ,
                        nombre: 'Jose'
                    })}
                >
                    <Text
                        style= {styles.botonGrandeTexto}
                    >Jose</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id:2 ,
                        nombre: 'Imara'
                    })}
                >
                    <Text
                    style= {styles.botonGrandeTexto}
                    >Imara</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
