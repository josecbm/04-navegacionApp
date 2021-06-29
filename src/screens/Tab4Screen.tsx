import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab4Screen = () => {
    useEffect(() => {
        console.log("Tab4Screen Effect")
    }, [])
    return (
        <View>
            <Text>Tab3Screen</Text>
        </View>
    )
}
