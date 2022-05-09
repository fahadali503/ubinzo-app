import { Box, Button, Center, Container, HStack, Image, Text, View, VStack } from 'native-base'
import React, { useRef, useState } from 'react';
import { Dimensions, useWindowDimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GetStartedComponent } from './GetStartedComponent';
import { Colors } from '@src/utils/colors';
import { CustomWidths, LETTER_SPACING } from '@src/utils/constants';

const data = [
    { title: "Wanna Sell Product?", description: "Start selling now to earn immediately. You can add salesman into your business so they can help you to grow your business." },
    { title: "Are You a Salesman?", description: "Contract any business and start selling their products to earn. You can withdrawal your amount anytime." },
    { title: "Wanna Purchase Product?", description: "You can purchase any product and can track the location of your product in real time." }
]
export default function GetStartedScreen() {
    const [activeSlide, setActiveSlide] = useState(0)
    const animation = useRef(null);
    const carousel = useRef(null);

    return (
        <VStack safeArea height={"full"} alignItems={"center"} justifyContent={"center"}>
            {/* @ts-ignore  */}
            <LottieView
                source={require('../../../assets/shopping.json')}
                autoPlay
                style={{
                    width: useWindowDimensions().width - 50,
                    marginTop: 20
                }}
            />
            <Carousel
                data={data}
                renderItem={({ item }) => {
                    return <GetStartedComponent item={item} />
                }}
                sliderWidth={CustomWidths.full}
                itemWidth={CustomWidths.full}

                // autoplay
                // autoplayDelay={5}
                onSnapToItem={(index) => setActiveSlide(index)}
            />

            <Button _text={{
                fontWeight: "semibold",
                letterSpacing: LETTER_SPACING - 1,
                fontSize: "lg"
            }} borderRadius={7} backgroundColor={Colors.blue} width={CustomWidths.basic}>
                Get Started Now
            </Button>

            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'black'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </VStack>
    )
}
