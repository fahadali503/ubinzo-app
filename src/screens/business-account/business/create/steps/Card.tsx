import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { VStack, } from 'native-base'
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack'

interface Props {

}
export const Card: React.FC<IVStackProps> = ({ children, ...props }) => {
    return (
        <VStack borderRadius={5} my={14} py={3} px={5} minWidth={'90%'} maxWidth={'99%'} mx={'auto'} {...props} style={styles.shadow}>
            {children}
        </VStack>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowColor: '#A6A6A6',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        // background color must be set
        backgroundColor: 'rgba(255,255,2550,0.4)' // invisible color
    },
})