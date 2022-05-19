import { StyleSheet } from 'react-native'
import React from 'react'
import { Image, Text, VStack } from 'native-base'
import { ICONS } from '@src/utils/icons'
import { Colors } from '@src/utils/colors';

interface INavCard {
    uri: string;
    title: string;
    alt: string;
    px?: string | number;
}
export default function NavCard({ px = 4, alt, title, uri, }: INavCard) {
    return (
        <VStack style={styles.shadow} alignItems={'center'} space={3} borderColor={Colors.gray} px={px} borderRadius={8} py={3}>
            <Image source={{ uri }} size={'md'} alt={alt} resizeMode={'cover'} />
            <Text letterSpacing={1} fontWeight={'semibold'} color={Colors.blueBackgroundColor}>{title}</Text>
        </VStack>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowColor: Colors.gray,
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        // background color must be set
        backgroundColor: Colors.gray // invisible color
    }
})