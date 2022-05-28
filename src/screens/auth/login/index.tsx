import { SIGN_UP_ROLES } from '@src/utils/enums'
import { Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Select, Text, VStack } from 'native-base'
import React, { useRef } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LETTER_SPACING } from '@src/utils/constants';
import { Colors } from '@src/utils/colors';
import { RoundedButton } from '@src/components/buttons/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { GetStartedNavigationProps } from '@src/navigation/GetStarted.navigation';
import { GET_STARTED_SCREEN_NAMES } from '@src/navigation/screen-names';


const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().min(4, 'Too Short!').required("Full Name is Required!"),
  email: Yup.string().email().required("Email is Required!"),
  password: Yup.string().min(8).max(50).required("Password is Required!"),
  username: Yup.string().min(4, 'Too Short!').matches(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/).required("Username is Required!"),
  role: Yup.string().required("Account Type is required!")
});

const initialValues = {
  fullName: '',
  username: '',
  password: '',
  role: '',
  email: ''
}

export function LoginScreen() {
  const navigation = useNavigation<GetStartedNavigationProps>()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Center w='100%'>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="2xl" fontSize={30} color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} fontWeight="semibold">
            Sign In
          </Heading>

          <Heading size="2xl"
            fontSize={17}
            mt={5}
            color="gray.500"
            w={'full'}
            fontWeight="medium">
            Please fill E-mail & password to login your Ubinzo account.
          </Heading>

          <Formik initialValues={initialValues} onSubmit={values => console.log(values)} validationSchema={SignUpSchema}>
            {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => {
              return <VStack space={3} mt="16">
                {/* Email */}
                <FormControl isRequired isInvalid={'email' in errors && 'email' in touched}>
                  <FormControl.Label _text={{ fontSize: "md" }}>Email</FormControl.Label>
                  <Input size={'lg'} onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontSize={"sm"}
                    placeholder={"john@doe.com"}
                  />
                  {'email' in errors && 'email' in touched && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
                </FormControl>
                {/* Password Field */}
                <FormControl isRequired isInvalid={'password' in errors && 'password' in touched}>
                  <FormControl.Label _text={{ fontSize: "md" }}>Password</FormControl.Label>
                  <Input type='password' size={'lg'} onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    py={4}
                    px={4}
                    keyboardType={"visible-password"}
                    rounded={'2xl'}
                    fontSize={"sm"}
                    placeholder={"**********"}
                  />
                  {'password' in errors && 'password' in touched && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                </FormControl>
                <RoundedButton
                  onPress={() => handleSubmit()}
                  backgroundColor={Colors.buttonBackgroundColor}
                  _text={{
                    color: "white",
                    fontWeight: 'medium',
                    letterSpacing: LETTER_SPACING,
                    fontSize: "lg"
                  }}
                  width={'full'}
                  size={"lg"}
                  py={4}
                  mt={5}
                  text='Sign In'
                />
              </VStack>
            }}
          </Formik>
          <Divider mt={4} />
          <HStack space={1} mt={4}>
            <Text fontSize={17} color='gray.500'>Don't have an account?</Text>
            <Text onPress={() => navigation.navigate(GET_STARTED_SCREEN_NAMES.REGISTER)} fontWeight={'semibold'} color='gray.500' fontSize={17}>Sign Up</Text>
          </HStack>
        </Box>
      </Center>

    </TouchableWithoutFeedback>
  )
}