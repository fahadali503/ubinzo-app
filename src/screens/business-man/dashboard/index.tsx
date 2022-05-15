import { Avatar, Box, FlatList, HStack, Icon, ScrollView, Spacer, Text, VStack } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import OverviewCard from './OverviewCard'
import { Foundation, Feather, Ionicons } from '@expo/vector-icons';
import { Colors } from '@src/utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { orders } from './data';

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
                    <Box safeArea px={5} flex={1} justifyContent={'center'}>
                        <HStack alignItems={'center'} space={3}>
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
                    </Box>
                </ImageBackground>

                {/* Balance Card */}
                <Box position={'absolute'} alignSelf="center" alignItems={'stretch'} bottom={-38} style={styles.balanceCardShadow} width={'80%'} borderRadius={30} >
                    <Box px={7} py={6} >
                        <HStack alignItems={'center'}>
                            <Box>
                                <Text fontWeight={'semibold'} color={"gray.700"} fontSize={19}>Total Balance</Text>
                                <Text fontWeight={'semibold'} color={'gray.300'}>Cash Available</Text>
                            </Box>
                            {/* User Total Balance */}
                            <Text fontWeight={'bold'} fontSize={'2xl'} color="gray.700" flex={1} textAlign={'right'}>$ 515,38</Text>
                        </HStack>
                    </Box>
                </Box>
            </Box>
            {/* End Upper Container */}

            {/* Navigation Cards */}
            <ScrollView flexGrow={1} mb={useSafeAreaInsets().bottom} mt={12}>
                <VStack space={2} py={4} px={4}>
                    {/* Overview Cards */}
                    <OverviewCard
                        heading='Total Sales'
                        Icon={<Icon name='burst-sale' size={'xl'} as={Foundation} color={'white'} />}
                        headingColor={'white'}
                        amount='$391,820.75'
                        description={<HStack alignItems={'center'} space={2}>
                            <HStack alignItems={'center'}>
                                <Icon as={Feather} size={'md'} color='green.500' name="arrow-up-right" />
                                <Text color='white'>21.9%</Text>
                            </HStack>
                            <Text color='white'>+61k today</Text>
                        </HStack>}
                    />
                    {/* Visitors */}
                    <OverviewCard
                        bgColor='white'
                        Icon={<Icon name='people' size={'xl'} as={Ionicons} />}
                        amount='931,701'
                        heading='Visitors'
                        description={<HStack alignItems={'center'} space={2}>
                            <HStack alignItems={'center'}>
                                <Icon as={Feather} size={'md'} color='green.500' name="arrow-up-right" />
                                <Text>5.7%</Text>
                            </HStack>
                            <Text>+5k today</Text>
                        </HStack>}
                        headingColor={'gray.500'}
                    />
                    {/* All Orders */}
                    <OverviewCard
                        Icon={<Icon name='inbox' size={'xl'} as={Feather} />}
                        amount={'104,665'}
                        heading={'All Orders'}
                        description={<HStack alignItems={'center'} space={2}>
                            <HStack alignItems={'center'}>
                                <Icon as={Feather} size={'md'} color='green.500' name="arrow-up-right" />
                                <Text>13%%</Text>
                            </HStack>
                            <Text>+7k today</Text>
                        </HStack>}
                        headingColor={'gray.400'}
                        bgColor={'white'}
                    />
                </VStack>
                {/* Sales Summary */}
                <Box pb={6} mb={4} style={styles.salesSummaryCardShadow} borderBottomRadius={10} w={'90%'} mx={'auto'} mt={'4'}>
                    <Box borderTopRadius={20} backgroundColor={Colors.blue} px={6} py={3}>
                        <Text letterSpacing={2} fontWeight={'semibold'} color={"white"} fontSize={20}>Sales Summary</Text>
                        <Text fontWeight={'normal'} color={"white"} fontSize={18}>Overview of Latest Month</Text>
                    </Box>
                    <VStack px={10} space={3} my={5}>
                        <HStack space={3} alignItems={'center'}>
                            <Text fontWeight={'semibold'} color={'gray.500'} fontSize={19}>USD</Text>
                            <Text fontWeight={'semibold'} fontSize={21}>80K</Text>
                        </HStack>
                        <Text fontWeight={'normal'} fontSize={18} color={'gray.400'}>Current Month Earnings</Text>
                    </VStack>
                    <VStack px={10}>
                        <HStack space={3} alignItems={'center'}>
                            <Text fontWeight={'semibold'} color={'gray.500'} fontSize={19}>USD</Text>
                            <Text fontWeight={'semibold'} fontSize={21}>100K</Text>
                        </HStack>
                        <Text fontWeight={'normal'} color={'gray.400'} fontSize={18}>Current Month Sales</Text>
                    </VStack>
                </Box>

                {/* Orders Overview */}
                <Box my={4} w={'90%'} mx={'auto'} >
                    <Text fontWeight={'semibold'} letterSpacing={2} fontSize={21}>Orders Overview</Text>
                    <Box mt={3} py={4} px={4} borderRadius={15} style={styles.salesSummaryCardShadow}>
                        <FlatList
                            data={orders}
                            renderItem={({ index, item }) => {
                                return <Box borderBottomWidth="1" _dark={{
                                    borderColor: "gray.600"
                                }} borderColor="coolGray.200" py="2">
                                    <HStack space={3} justifyContent="space-between">
                                        <Avatar size="48px" source={{
                                            uri: ''
                                        }} />
                                        <VStack>
                                            <Text _dark={{
                                                color: "warmGray.50"
                                            }} color="coolGray.800" bold>
                                                {item.title}
                                            </Text>
                                            <Text color="coolGray.600" _dark={{
                                                color: "warmGray.200"
                                            }}>
                                                {item.status}
                                            </Text>
                                        </VStack>
                                        <Spacer />
                                        <Text fontSize="xs" _dark={{
                                            color: "warmGray.50"
                                        }} color="coolGray.800" alignSelf="flex-start">
                                            {item.date}
                                        </Text>
                                    </HStack>
                                </Box>
                            }}
                        />
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

const styles = StyleSheet.create({
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