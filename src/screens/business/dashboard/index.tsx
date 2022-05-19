import { LottieView } from '@src/components/lottie/LottieView'
import { Colors } from '@src/utils/colors'
import { Greet, greeting } from '@src/utils/fns'
import { ICONS } from '@src/utils/icons'
import { Avatar, Box, FlatList, HStack, Icon, Image, ScrollView, Spacer, Text, View, VStack } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import NavCard from './NavCard'


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
                        {/* Display greetings */}
                        <HStack justifyContent={'flex-end'} px={6} alignItems={'center'} space={5}>
                            <Text letterSpacing={5} color={'white'} fontWeight={'normal'} fontSize={23} textAlign={'right'}>{greeting(new Date().getHours()).message}</Text>
                            {/* Lottie View */}
                            {displayGreetingAnimation(greeting(new Date().getHours()).type)}
                        </HStack>
                    </VStack>
                </ImageBackground>

            </Box>
            {/* End Upper Container */}

            {/* Info Container & Navigation Cards */}
            <VStack px={4} mt={5}>
                {/* Upcomming Appointment */}
                <VStack space={3} py={3} px={5} borderColor={'#EBECF0'} borderWidth={1} borderRadius={8} style={styles.upcommingShadow}>
                    <Box>
                        <Text fontWeight={'semibold'} fontSize={'15'} color={Colors.blueBackgroundColor}>Upcomming Appointment</Text>
                        <Text fontWeight={'normal'} color={'gray.400'}>15 Appointments in the Past</Text>
                    </Box>
                    <HStack space={3}>
                        {/* Picture */}
                        <Image size={'md'} borderRadius={8} resizeMode="cover" source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt={"Alternate Text "} />

                        {/* The detail of the person who booked the  meeting */}
                        <VStack space={1}>
                            {/* Name */}
                            <Text fontWeight={'semibold'} color={'gray.600'}>John Doe</Text>
                            {/* Age and Gender */}
                            <HStack alignItems={'center'}>
                                <Text color={'gray.400'}>Age 24  |</Text>
                                <Text color={'gray.400'}>  Male</Text>
                            </HStack>
                            {/* Address */}
                            <Text color={'gray.400'}>A-23 Sultan Town, Lahore</Text>

                            {/* Date, Month, Year & Time */}
                            <HStack alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    {/* Calender Icon */}
                                    <Image size={'xs'} source={{ uri: ICONS.calender }} alt={'Calender'} resizeMode='cover' />
                                    {/* Date */}
                                    <Text color={'gray.400'}>19 May,2022</Text>
                                </HStack>
                                <HStack alignItems={'center'}>
                                    {/* Clock Icon */}
                                    <Image size={'xs'} source={{ uri: ICONS.clock }} alt={'Clock'} resizeMode='cover' />
                                    {/* Time */}
                                    <Text color={'gray.400'}>09:00 am</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </VStack>

                {/* Nav Cards */}
                <VStack mt={2} space={8} py={5} px={5}>
                    <HStack justifyContent={'space-around'}>
                        {/* Appointments Nav */}
                        <NavCard uri={ICONS.planner} alt='Appointments' title='Your Appointments' />
                        {/* Meetings Nav */}
                        <NavCard uri={ICONS.users} alt='Meetings' title='Your Meetings' />
                    </HStack>
                    <HStack justifyContent={'space-around'}>
                        {/* Chat Nav */}
                        <NavCard px={8} uri={ICONS.chat} alt='Chat' title='Chat' />
                        {/* Weekly Reports Nav */}
                        <NavCard uri={ICONS.weeklyReport} alt='Weekly Reports' title='Weekly Reports' />
                    </HStack>
                </VStack>
            </VStack>
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
    upcommingShadow: {
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