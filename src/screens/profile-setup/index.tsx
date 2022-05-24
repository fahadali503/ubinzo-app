import { Colors } from '@src/utils/colors';
import { Avatar, Box, Text, VStack } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileSetupScreen() {
    return (
        <Box safeArea flex={1}>
            <Text letterSpacing={2} fontWeight={'semibold'} fontSize={22} textAlign={'center'}>Update Profile</Text>

            <Box flex={1} justifyContent={'center'} alignItems={'center'}>
                <VStack space={5}>
                    {/* Profile Image */}
                    <Box position={'relative'}>
                        <Avatar bg="gray.400" alignSelf="center" size="2xl" source={{
                            uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                        }} />
                        <Box padding={1.5} px={2} borderRadius={100} bg={'gray.400'} position={'absolute'} bottom={-15} right={7}>
                            <Ionicons name='md-camera-sharp' size={35} />
                        </Box>
                    </Box>
                    {/* Full Name */}
                    <Text fontWeight={'semibold'} fontSize={18} letterSpacing={2} textAlign={'center'}>
                        Fahad Ali
                    </Text>
                </VStack>
            </Box>
        </Box>
    )
}
