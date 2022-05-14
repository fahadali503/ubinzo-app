import { RoundedButton } from '@src/components/buttons/RoundedButton';
import { TextButton } from '@src/components/buttons/TextButton';
import { Colors } from '@src/utils/colors'
import { Box, Button, Image, Text, VStack } from 'native-base'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function GetStartedScreen() {
    // insets are used to get the bottom, left, right and top bar height
    const insets = useSafeAreaInsets();
    return (
        <Box flex={1} backgroundColor={Colors.blueBackgroundColor} justifyContent={"flex-end"}>
            <Box alignItems={'center'} flex={1} justifyContent={"center"}>
                <Image source={require('@assets/logos/logo.png')} alt={"Logo"} size={"2xl"} />
            </Box>
            <VStack px={4} space={4} mb={insets.bottom + 15} >
                <RoundedButton text='Sign Up' />
                <TextButton text='Sign In' />
            </VStack>
        </Box>
    )
}