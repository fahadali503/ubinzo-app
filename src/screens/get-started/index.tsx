import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoundedButton } from '@src/components/buttons/RoundedButton';
import { TextButton } from '@src/components/buttons/TextButton';
import { GetStartedNavigationProps } from '@src/navigation/GetStarted.navigation';
import { GET_STARTED_SCREEN_NAMES } from '@src/navigation/screen-names';
import { Colors } from '@src/utils/colors'
import { Box, Button, Image, Text, VStack } from 'native-base'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function GetStartedScreen() {
    const navigation = useNavigation<GetStartedNavigationProps>()
    // insets are used to get the bottom, left, right and top bar height
    const insets = useSafeAreaInsets();
    return (
        <Box flex={1} backgroundColor={Colors.blueBackgroundColor} justifyContent={"flex-end"}>
            <Box alignItems={'center'} flex={1} justifyContent={"center"}>
                <Image source={require('@assets/logos/logo.png')} alt={"Logo"} size={"2xl"} />
            </Box>
            <VStack px={4} space={4} mb={insets.bottom + 15} >
                <RoundedButton onPress={() => navigation.navigate(GET_STARTED_SCREEN_NAMES.REGISTER)} text='Sign Up' />
                <TextButton text='Sign In' onPress={() => navigation.navigate(GET_STARTED_SCREEN_NAMES.LOGIN)} />
            </VStack>
        </Box>
    )
}