import React from 'react'
import { FormControl, HStack, Text, VStack } from 'native-base'
import { Card } from './Card'
import { FormLabel } from '@src/components/form/FormLabel'
import FormInput from '@src/components/form/FormInput'
import { Dimensions } from 'react-native'
import FormSelect from '@src/components/form/FormSelect'
import { BUSINESSES_LIST } from '@src/utils/businesses'

export const CreateBusinessInformation = () => {
    return (
        <Card flex={1}>
            <Text fontWeight={'semibold'} fontSize={17}>Business Information</Text>
            {/* Name, Description & Business Type */}
            <VStack px={2} >
                <HStack alignItems={'center'} space={2} width={'full'}>
                    <FormControl flex={6}>
                        <FormLabel text='Business Name' />
                        <FormInput placeholder='Business Name' />
                    </FormControl>
                    <FormControl flex={8}>
                        <FormLabel text='Business Type' />
                        <FormSelect accessibilityLabel='Business Type' placeholder='Choose Business Type' list={Object.values(BUSINESSES_LIST)}
                        />
                    </FormControl>
                </HStack>
                {/* Description */}
                <FormControl flex={8}>
                    <FormLabel text='Owner Name' />
                    <FormInput placeholder='Owner Name' />
                </FormControl>
            </VStack>
        </Card>
    )
}

