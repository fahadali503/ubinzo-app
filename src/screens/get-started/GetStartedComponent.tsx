import { Colors } from '@src/utils/colors';
import { LETTER_SPACING } from '@src/utils/constants';
import { Box, Button, Center, Divider, Text, View, VStack } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native';

type Props = {
    item: {
        title: string;
        description: string
    }
}
export function GetStartedComponent({ item }: Props) {
    return (
        <Box style={styles.shadow} borderWidth={1} alignSelf={"center"} width={350} mt={'100px'} px={4} borderColor={Colors.grey} borderRadius="lg" >
            <VStack space={5}>
                <Text color={Colors.brown} letterSpacing={LETTER_SPACING} textAlign={'center'} mt={4} fontWeight={600} fontSize={25}>
                    {item.title}
                </Text>
                <Text letterSpacing={LETTER_SPACING} textAlign={'center'} fontWeight={500} mb={10} fontSize={16}>
                    {item.description}
                </Text>
            </VStack>
        </Box>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowOffset: { width: 5, height: 5 },
        shadowColor: Colors.grey,
        shadowOpacity: 1,
        elevation: 10,
        // background color must be set
        backgroundColor: Colors.white // invisible color
    }
})