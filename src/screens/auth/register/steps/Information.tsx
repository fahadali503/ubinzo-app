import FormInput from '@src/components/form/FormInput'
import { FormLabel } from '@src/components/form/FormLabel'
import { Colors } from '@src/utils/colors'
import { SIGN_UP_ROLES } from '@src/utils/enums'
import { FormikProps } from 'formik'
import { Avatar, Badge, Box, Button, CheckIcon, FormControl, HStack, Input, KeyboardAvoidingView, ScrollView, Select, View, VStack } from 'native-base'
import React from 'react'
import { Keyboard, Platform, TouchableNativeFeedback, TouchableWithoutFeedback, useWindowDimensions } from 'react-native'

type Props<T> = {
    signUpFormik: FormikProps<T>;
}

export default function InformationStep<T extends { [key: string]: any }>({ signUpFormik, }: Props<T>) {
    const { errors, touched, handleBlur, handleChange, values, setFieldValue } = signUpFormik;
    const screen = useWindowDimensions();

    const removeSkill = (value: string) => {
        const allValues = [...(values.skills as string[])];
        const filteredValues = allValues.filter(skill => skill !== value.trim())
        setFieldValue('skills', filteredValues);
    }

    const addValue = (value: string) => {
        if ((values.skills as string[]).includes(value.trim())) {
            return;
        }
        const allValues = [...values.skills, value.trim()];
        setFieldValue('skills', allValues);
    }

    return (
        <Box>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "height" : "padding"}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? screen.height * 0.25 : screen.height * 0.5}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Username */}
                        <VStack>
                            <FormControl isRequired isInvalid={'username' in signUpFormik.errors && 'username' in signUpFormik.touched}>
                                <FormLabel text='Username' />
                                <FormInput
                                    backgroundColor={'gray.200'}
                                    onChangeText={signUpFormik.handleChange("username")}
                                    onBlur={signUpFormik.handleBlur("username")}
                                    value={signUpFormik.values.username}
                                    autoCapitalize={'none'}
                                    size='2xl'
                                    py={4}
                                    px={4}
                                    rounded={'2xl'}
                                    fontSize={"sm"}
                                    placeholder={"johndoe"}
                                />
                                {'username' in errors && 'username' in touched && <FormControl.ErrorMessage>{errors.username}</FormControl.ErrorMessage>}
                            </FormControl>
                        </VStack>
                        {/* Full Name */}
                        <FormControl isRequired isInvalid={'fullName' in errors && 'fullName' in touched}>
                            <FormLabel text='Full Name' />
                            <FormInput
                                onChangeText={handleChange("fullName")}
                                onBlur={handleBlur("fullName")}
                                value={values.fullName}
                                size='2xl'
                                backgroundColor={'gray.200'}
                                py={4}
                                px={4}
                                rounded={'2xl'}
                                fontSize={"sm"}
                                placeholder={"John Doe"}
                            />
                            {'fullName' in errors && 'fullName' in touched && <FormControl.ErrorMessage>{errors.fullName}</FormControl.ErrorMessage>}
                        </FormControl>
                        {/* Profile Picture */}
                        <FormControl>
                            <FormLabel text='Upload Picture' />
                            <HStack space={3} alignItems={'center'} justifyContent={'center'}>
                                <Avatar
                                    bgColor={'gray.300'}
                                    size={'lg'}
                                />
                                <Button size={'sm'} variant={'outline'}>Choose Picture</Button>
                            </HStack>
                        </FormControl>
                        {/* SKills */}
                        <FormControl isRequired isInvalid={'skills' in errors && 'skills' in touched}>
                            <FormLabel text='Add Skills' />
                            <FormInput
                                onBlur={handleBlur("skills")}
                                size='2xl'
                                backgroundColor={'gray.200'}
                                py={4}
                                onSubmitEditing={e => addValue(e.nativeEvent.text)}
                                px={4}
                                rounded={'2xl'}
                                fontSize={"sm"}
                                placeholder={"Skills"}
                                returnKeyType={"done"}
                                returnKeyLabel={'Add Skill'}
                            />
                            {'skills' in errors && 'skills' in touched && <FormControl.ErrorMessage>{errors.skills}</FormControl.ErrorMessage>}

                            <HStack space={3} my={2} w={'full'} flexWrap={'wrap'}>
                                {values.skills.length > 0 && values.skills.map((skill: string, i: number) => <TouchableNativeFeedback key={i} onPress={() => removeSkill(skill)}>
                                    <Badge my={1} borderRadius={50} _text={{
                                        fontSize: 16
                                    }} colorScheme={"info"}>{skill}</Badge>
                                </TouchableNativeFeedback>)}
                            </HStack>
                        </FormControl>
                        {/* Qualification */}
                        <FormControl isRequired isInvalid={'qualification' in errors && 'qualification' in touched}>
                            <FormLabel text='Qualification' />
                            <FormInput
                                onChangeText={handleChange("qualification")}
                                onBlur={handleBlur("qualification")}
                                value={values.qualification}
                                size='2xl'
                                backgroundColor={'gray.200'}
                                py={4}
                                px={4}
                                autoCapitalize={'characters'}
                                rounded={'2xl'}
                                fontSize={"sm"}
                                placeholder={"Qualification"}
                            />
                            {'qualification' in errors && 'qualification' in touched && <FormControl.ErrorMessage>{errors.qualification}</FormControl.ErrorMessage>}
                        </FormControl>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Box>

    )
}