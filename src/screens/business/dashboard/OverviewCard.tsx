import React from 'react'
import { Box, HStack, Icon, Text, VStack } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';

const backgroundColor = '#1192EF';
type Props = {
    bgColor?: 'white';
    heading: string;
    Icon: any;
    headingColor: ColorType;
    amount: string;
    description: React.ReactNode;
}

const OverviewCard: React.FC<Props> = ({ amount, Icon, description, heading, headingColor, bgColor }: Props) => {
    return (
        <VStack space={2} px={4} py={4} w={'80%'} mx={'auto'} rounded={8} borderColor={bgColor ? "gray.300" : backgroundColor} borderWidth={1} backgroundColor={bgColor ? bgColor : backgroundColor}>
            <HStack alignItems={'center'}>
                {Icon}
                <Text fontSize={'md'} fontWeight={"semibold"} color={headingColor}>{heading}</Text>
            </HStack>
            <Text fontSize={26} color={bgColor ? 'black' : 'white'} fontWeight={'bold'}>{amount}</Text>
            {description}
        </VStack>
    )
}
export default OverviewCard