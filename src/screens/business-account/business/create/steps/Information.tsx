import React, { useState } from 'react'
import { Badge, Box, FormControl, HStack, KeyboardAvoidingView, ScrollView, Text, VStack } from 'native-base'
import { Card } from './Card'
import { FormLabel } from '@src/components/form/FormLabel'
import FormInput from '@src/components/form/FormInput'
import { Platform, Keyboard, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native'
import FormSelect from '@src/components/form/FormSelect'
import { BUSINESSES_LIST } from '@src/utils/businesses'
import FormTextArea from '@src/components/form/FormTextArea';
import CountryPicker from 'react-native-country-picker-modal'
import { RoundedButton } from '@src/components/buttons/RoundedButton'
import { Colors } from '@src/utils/colors'
import { WizardProps } from '@src/utils/types/common.types'
const screen = Dimensions.get('window')


type Props = {
    wizardRef: React.RefObject<WizardProps>
}
export const CreateBusinessInformation = ({ wizardRef }: Props) => {
    return (
        <Card flex={1}>
            <Text fontWeight={'semibold'} fontSize={17}>Business Information</Text>
            {/* Name, Description & Business Type */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView flex={1} h={{ base: '400px', lg: 'auto', }} behavior={Platform.OS === 'ios' ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? screen.height * 0.25 : screen.height * 0.5}
                >
                    <ScrollView flex={1}>
                        <VStack px={2} space={2} >
                            <HStack alignItems={'center'} space={2} width={'full'}>
                                {/* Business Name */}
                                <FormControl width={'40%'}>
                                    <FormLabel text='Business Name' />
                                    <FormInput placeholder='Business Name' />
                                </FormControl>
                                {/* Business Type */}
                                <FormControl width={'60%'}>
                                    <FormLabel text='Business Type' />
                                    <FormSelect accessibilityLabel='Business Type' placeholder='Choose Business Type' list={Object.values(BUSINESSES_LIST)}
                                    />
                                </FormControl>
                            </HStack>
                            {/* Business Description */}
                            <FormTextArea placeholder='Tell us about your business' />

                            {/* Owner Information */}
                            <Box>
                                <HStack my={3} space={2} alignItems={"center"}>
                                    {/* Owner Name */}
                                    <FormControl flex={6}>
                                        <FormLabel text='Owner Name' />
                                        <FormInput placeholder='Owner Name' />
                                    </FormControl>
                                    {/* Business Email Address */}
                                    <FormControl flex={6}>
                                        <FormLabel text='Business Email' />
                                        <FormInput placeholder='Email Address' />
                                    </FormControl>
                                </HStack>
                                {/* Business Phone  */}
                                <HStack space={3}>
                                    <Box borderWidth={1} borderColor={"gray.300"} alignItems={'center'} justifyContent={'center'} borderRadius={2} pl={1}>
                                        <CountryPicker
                                            withCallingCode
                                            withFlag
                                            containerButtonStyle={styles.countryFlag}
                                            withFilter
                                            countryCode='PK'
                                        />
                                    </Box>
                                    <FormControl flex={6}>
                                        <FormInput placeholder='Phone Number' />
                                    </FormControl>
                                </HStack>
                                {/* Owner CNIC */}
                                <FormControl>
                                    <FormLabel text='National Identity' />
                                    <FormInput placeholder='Identity Card Number' />
                                </FormControl>
                            </Box>

                            {/* Skills, Education And Experience */}
                            <VStack>
                                <FormControl>
                                    <FormLabel text='Your Experience in Business' />
                                    <FormInput placeholder='Experience' keyboardType='number-pad' />
                                </FormControl>
                            </VStack>
                        </VStack>
                        <HStack mt={8} mb={3} zIndex={-1}>
                            <RoundedButton onPress={() => wizardRef.current?.next()} w={'60%'} backgroundColor={Colors.blueBackgroundColor} _text={{ color: 'white', fontWeight: 'semibold', fontSize: 'xl' }} text='Next' />
                        </HStack>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Card>
    )
}

const styles = StyleSheet.create({
    countryFlag: {
    }
})