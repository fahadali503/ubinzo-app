import FormInput from '@src/components/form/FormInput'
import { FormLabel } from '@src/components/form/FormLabel'
import FormSelect from '@src/components/form/FormSelect'
import { CHARGE_TYPE } from '@src/utils/enums/common.enum'
import { Box, Button, FormControl, HStack, Switch, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Card } from './Card';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { weekDays } from './data'
import { RoundedButton } from '@src/components/buttons/RoundedButton'
import { Colors } from '@src/utils/colors'
import { WizardProps } from '@src/utils/types/common.types'


const DisplayOtherFields = () => {
    return <VStack px={2}>
        {/* Charge Cost */}
        <Box>
            <FormControl>
                <FormLabel text='How much you are gonna charge on per meeting?' />
                <FormInput keyboardType='numeric' placeholder='Charge Cost' />
            </FormControl>
        </Box>
        {/* Charge Type */}
        <Box>
            <FormControl>
                <FormLabel text='What will the charge duration?' />
                <FormSelect placeholder='Charge Type' list={Object.values(CHARGE_TYPE)} />
            </FormControl>
        </Box>
    </VStack>
}


type Props = {
    wizardRef: React.RefObject<WizardProps>
}
export default function Details({ wizardRef }: Props) {
    const [isCharge, setIsCharge] = useState(false);
    const [showOpening, setShowOpening] = useState(false);
    const [showClosing, setShowClosing] = useState(false);
    const [showWeek, setShowWeek] = useState(false);
    const [offDays, setOffDays] = useState([]);
    const [week, setWeekd] = useState(weekDays);


    const toggleCharge = (value: boolean) => {
        setIsCharge(value);
    }
    const handleOpening = (time: Date) => {
        setShowOpening(false);
        console.log('Opening' + time);
    }
    const handleClosingTime = (time: Date) => {
        setShowClosing(false);
        console.log('Closing Time' + time);
    }
    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
            <Card >
                <Text fontWeight={'semibold'} fontSize={17}>Business Details</Text>
                {/* Do you charge Input */}
                <VStack px={2} space={3}>
                    <Box>
                        <FormControl>
                            <HStack alignItems={'center'} justifyContent={'space-between'}>
                                <FormLabel text='Do you charge?' />
                                <Switch onValueChange={toggleCharge} size={'sm'} />
                            </HStack>
                        </FormControl>
                    </Box>

                    {/* Display Other Fields if Do you charge value is true */}
                    {isCharge && <DisplayOtherFields />}

                    {/* Business Opening Time */}
                    <Box>
                        <DateTimePickerModal
                            onCancel={() => setShowOpening(false)}
                            mode={'time'}
                            isVisible={showOpening}
                            onConfirm={handleOpening}
                        />
                        <FormControl>
                            <FormLabel text='Business Opening Time' />
                            <Button onPress={() => setShowOpening(true)} colorScheme={'blue'} variant={'outline'}>
                                Choose Time
                            </Button>
                        </FormControl>
                    </Box>
                    {/* Business Closing Time */}
                    <Box>
                        <DateTimePickerModal
                            onCancel={() => setShowClosing(false)}
                            mode={'time'}
                            isVisible={showClosing}
                            onConfirm={handleClosingTime}
                        />
                        <FormControl>
                            <FormLabel text='Business Closing Time' />
                            <Button onPress={() => setShowClosing(true)} colorScheme={'blue'} variant={'outline'}>
                                Choose Time
                            </Button>
                        </FormControl>
                    </Box>

                    {/* Off Days */}
                    <Box>
                        <FormControl>
                            <FormLabel text='Choose Business Off Days' />
                            <DropDownPicker
                                items={week}
                                open={showWeek}
                                setOpen={setShowWeek}
                                value={offDays}
                                setValue={setOffDays}
                                multiple
                                theme='DARK'
                                mode='BADGE'
                            />
                        </FormControl>
                    </Box>

                    <HStack mt={8} mb={3} zIndex={-1}>
                        <RoundedButton onPress={() => wizardRef.current?.prev()} variant={'outline'} w={'40%'} backgroundColor={'transparent'} text='Back' />
                        <RoundedButton w={'40%'} backgroundColor={Colors.blueBackgroundColor} _text={{ color: 'white', fontWeight: 'semibold', fontSize: 'xl' }} text='Finish' />
                    </HStack>
                </VStack>
            </Card>
        </TouchableWithoutFeedback>
    )
}

