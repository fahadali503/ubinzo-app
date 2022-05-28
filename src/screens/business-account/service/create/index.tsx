import React from 'react'
import { FormControl, Text, VStack } from 'native-base'
import { FormLabel } from '@src/components/form/FormLabel'
import FormInput from '@src/components/form/FormInput'
import FormSelect from '@src/components/form/FormSelect'
import { Service_Type } from '@src/utils/enums/business-account.enum';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { RoundedButton } from '@src/components/buttons/RoundedButton'
import { Colors } from '@src/utils/colors'
import FormTextArea from '@src/components/form/FormTextArea'
import { IMeetingDuration } from '@src/utils/business-account/bussiness.types'

const meetingDuration: IMeetingDuration[] = [
    { label: "15 Minutes", value: 15 },
    { label: "30 Minutes", value: 30 },
    { label: "45 Minutes", value: 45 },
    { label: "60 Minutes", value: 60 },
    { label: "90 Minutes", value: 90 },
]
export default function CreateServiceScreen() {
    return (
        <VStack space={2} flex={1} w={'full'} safeArea py={5}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <VStack space={4} justifyContent={'center'} px={4} h={'full'}>
                    <Text textAlign={'center'} fontWeight={'semibold'} fontSize={25}>Create Service</Text>
                    {/* Service Name */}
                    <VStack>
                        <FormControl>
                            <FormLabel text='Title' />
                            <FormInput placeholder='Service Title' />
                        </FormControl>
                    </VStack>
                    {/* Service Description */}
                    <VStack>
                        <FormLabel text='Description' />
                        <FormTextArea placeholder='Service Description' width={'100%'} />
                    </VStack>
                    {/* Service Type */}
                    <VStack>
                        <FormControl>
                            <FormLabel text='Type' />
                            <FormSelect list={Object.values(Service_Type)} placeholder={'Choose Service Type'} />
                        </FormControl>
                    </VStack>
                    {/* Meeting Duration */}
                    <VStack>
                        <FormControl>
                            <FormLabel text='Set the meeting duration' />
                            <FormSelect list={meetingDuration} placeholder={"Choose Meeting Duration"} />
                        </FormControl>
                    </VStack>
                    {/* Meetings Per Day */}
                    <VStack>
                        <FormControl>
                            <FormLabel text='How many meetings you want to accept on this Service?' />
                            <FormInput keyboardType='numeric' />
                        </FormControl>
                    </VStack>
                    <RoundedButton
                        text='Create Service'
                        colorScheme={'blue'}
                        _text={{ color: 'white', fontSize: 20, fontWeight: 'semibold' }}
                        bgColor={Colors.buttonBackgroundColor}
                    />
                </VStack>
            </TouchableWithoutFeedback>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#ecf0f1',
    },
})