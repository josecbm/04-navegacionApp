import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core'

export const Pagina2Screen = () => {
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: '' 
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text 
            style={styles.title}
            > Pagina2 Screen</Text>
            
            <Button 
                title = "Ir pagina 3"
                onPress = {() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
