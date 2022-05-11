import { SIGN_UP_ROLES } from '@src/utils/enums'
import { Box, Button, Center, CheckIcon, FormControl, Heading, Input, Select, Text, VStack } from 'native-base'
import React, { useRef } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
// import AnimatedLottieView from 'lottie-react-native';
import { LETTER_SPACING } from '@src/utils/constants';
import LottieView from 'lottie-react-native';


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
  const animation = useRef(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Center w='100%'>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <LottieView
            ref={animation}
            source={require('@assets/lottie/signup')}
            autoPlay
            style={{
              position: "relative"
            }}
          />
          <Heading size="lg" fontSize={30} color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="medium" size="md">
            Sign in to continue!
          </Heading>

          <Formik initialValues={initialValues} onSubmit={values => console.log(values)} validationSchema={SignUpSchema}>
            {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => {
              return <VStack space={3} mt="5">
                {/* Email */}
                <FormControl isRequired isInvalid={'email' in errors && 'email' in touched}>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email} />
                  {'email' in errors && 'email' in touched && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
                </FormControl>
                {/* Password Field */}
                <FormControl isRequired isInvalid={'password' in errors && 'password' in touched}>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password} />
                  {'password' in errors && 'password' in touched && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                </FormControl>
                <Button _text={{
                  fontWeight: "semibold",
                  fontSize: "lg",
                  letterSpacing: LETTER_SPACING
                }} onPress={() => handleSubmit()} mt="2" colorScheme="indigo">
                  Sign in
                </Button>
              </VStack>
            }}
          </Formik>
        </Box>
      </Center>

    </TouchableWithoutFeedback>
  )
}