import { LottieView } from '@src/components/lottie/LottieView'
import { Greet, greeting } from '@src/utils/fns'
import { Avatar, Box, FlatList, HStack, Icon, ScrollView, Spacer, Text, View, VStack } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'


export const displayGreetingAnimation = (type: Greet) => {
    if (type === 'Afternoon') {
        return <LottieView
            autoPlay
            resizeMode='contain'
            style={styles.sunStyles}
            source={require('@assets/lottie/sun')}
        />
    }
    if (type === 'Evening') {
        return <LottieView
            autoPlay
            resizeMode='contain'
            style={styles.sunStyles}
            source={require('@assets/lottie/sunset')}
        />
    }
    if (type === 'Mid Night') {
        return <LottieView
            autoPlay
            resizeMode='contain'
            style={styles.sunStyles}
            source={require('@assets/lottie/midnight')}
        />
    }
    // not showing
    if (type === 'Morning') {
        return <LottieView
            resizeMode='cover'
            autoPlay
            style={styles.sunStyles}
            source={require('@assets/lottie/morning')}
        />
    }
    if (type === 'Night') {
        return <LottieView
            resizeMode='contain'
            autoPlay
            style={[styles.sunStyles]}
            source={require('@assets/lottie/sunset')}
        />
    }
}

export default function BusinessManDashboardScreen() {
    return (
        <Box flex={1}>
            {/* Upper Container */}
            <Box position={'relative'} height={'30%'}>
                {/* This will set the background image of the container and then the content will be displayed accordingly */}
                <ImageBackground
                    source={require('@assets/images/blue-background.png')}
                    style={styles.backgroundImage}
                    imageStyle={styles.backgroundImageRadius}
                    resizeMode='cover'
                >
                    {/* Profile Container */}
                    <VStack space={3} h={'full'} safeArea px={5} flex={1} justifyContent={'center'}>
                        <HStack alignItems={'center'} flex={8} space={3}>
                            {/* Profile Picture */}
                            <Avatar size="xl" source={{
                                uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"
                            }}>
                                RB
                            </Avatar>
                            {/* User Full Name */}
                            <VStack>
                                <Text color={'white'} fontSize={'lg'} fontWeight='light'>Welcome Back,</Text>
                                <Text color={'white'} fontWeight={'bold'} letterSpacing={2} fontSize={'4xl'}>Fahad Ali</Text>
                            </VStack>
                        </HStack>
                        <HStack justifyContent={'flex-end'} px={6} alignItems={'center'} space={5}>
                            <Text letterSpacing={5} color={'white'} fontWeight={'normal'} fontSize={23} textAlign={'right'}>{greeting(new Date().getHours()).message}</Text>
                            {/* Lottie View */}
                            {displayGreetingAnimation(greeting(new Date().getHours()).type)}
                        </HStack>
                    </VStack>
                </ImageBackground>

            </Box>
            {/* End Upper Container */}

        </Box>
    )
}

const styles = StyleSheet.create({
    sunStyles: {
        width: 50,
        height: 50
    },
    backgroundImage: {
        width: "100%",
        height: "100%"
    },
    backgroundImageRadius: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    balanceCardShadow: {
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowColor: '#EBECF0',
        shadowOpacity: 1,
        elevation: 10,
        // background color must be set
        backgroundColor: 'white' // invisible color
    },
    salesSummaryCardShadow: {
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowColor: '#EBECF0',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        // background color must be set
        backgroundColor: 'white' // invisible color
    },
})