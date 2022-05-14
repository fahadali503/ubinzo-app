import { SIGN_UP_ROLES } from '@src/utils/enums'
import { Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Select, Text, VStack } from 'native-base'
import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LETTER_SPACING } from '@src/utils/constants';
import { Colors } from '@src/utils/colors';
import { RoundedButton } from '@src/components/buttons/RoundedButton';


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

export default function RegisterScreen() {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Center w='100%'>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="2xl" fontSize={30} color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} fontWeight="semibold">
            Sign Up
          </Heading>

          <Formik initialValues={initialValues} onSubmit={values => console.log(values)} validationSchema={SignUpSchema}>
            {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => {
              return <VStack space={3} mt="10">
                {/* Username */}
                <FormControl isRequired isInvalid={'username' in errors && 'username' in touched}>
                  <FormControl.Label _text={{ fontSize: "md" }}>Username</FormControl.Label>
                  <Input
                    backgroundColor={Colors.inputBackgroundColor}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                    size='2xl'
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontSize={"sm"}
                    placeholder={"johndoe"}
                  />
                  {'username' in errors && 'username' in touched && <FormControl.ErrorMessage>{errors.username}</FormControl.ErrorMessage>}
                </FormControl>
                {/* Full Name */}
                <FormControl isRequired isInvalid={'fullName' in errors && 'fullName' in touched}>
                  <FormControl.Label _text={{ fontSize: "md" }}>Full Name</FormControl.Label>
                  <Input onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                    size='2xl'
                    backgroundColor={Colors.inputBackgroundColor}
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontSize={"sm"}
                    placeholder={"John Doe"}
                  />
                  {'fullName' in errors && 'fullName' in touched && <FormControl.ErrorMessage>{errors.fullName}</FormControl.ErrorMessage>}
                </FormControl>
                {/* Email */}
                <FormControl isRequired isInvalid={'email' in errors && 'email' in touched}>
                  <FormControl.Label _text={{ fontSize: "md" }}>Email</FormControl.Label>
                  <Input onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    size='2xl'
                    backgroundColor={Colors.inputBackgroundColor}
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
                  <Input type="password" onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    backgroundColor={Colors.inputBackgroundColor}
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontSize={"sm"}
                    placeholder={"john@doe.com"}
                  />
                  {'password' in errors && 'password' in touched && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                </FormControl>
                {/* Choose Account Type */}
                <FormControl isRequired isInvalid={'role' in errors && 'role' in touched}>
                  <FormControl.Label _text={{ fontSize: "md" }}>Choose Account Type</FormControl.Label>
                  <Select size='lg' onValueChange={handleChange("role")}
                    selectedValue={values.role} minWidth="200" accessibilityLabel="Choose Service"
                    backgroundColor={Colors.inputBackgroundColor}
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontWeight='medium'
                    fontSize={"sm"}
                    placeholder="Choose Service" _selectedItem={{
                      _text: {
                        color: "white",
                        fontWeight: "semibold"
                      },
                      bg: Colors.blueBackgroundColor,
                      endIcon: <CheckIcon size="5" color={"white"} />
                    }}
                    defaultValue={SIGN_UP_ROLES.USER} mt={1}>
                    {Object.values(SIGN_UP_ROLES).map((role) => <Select.Item key={role} label={role} value={role} />)}
                  </Select>
                  {'role' in errors && 'role' in touched && <FormControl.ErrorMessage>{errors.role}</FormControl.ErrorMessage>}
                </FormControl>
                <RoundedButton
                  onPress={() => handleSubmit()}
                  backgroundColor={Colors.blueBackgroundColor}
                  _text={{
                    color: "white",
                    fontWeight: 'medium',
                    letterSpacing: LETTER_SPACING,
                    fontSize: "lg"
                  }}
                  width={'full'}
                  size={"lg"}
                  py={4}
                  mt={1}
                  text='Sign up'
                />
              </VStack>
            }}
          </Formik>
          <Divider mt={2} />
          <HStack mt={2} space={2}>
            <Text fontSize={17}>Already have an account?</Text>
            <Text fontSize={17} fontWeight={'bold'}>Sign In</Text>
          </HStack>
        </Box>
      </Center>

    </TouchableWithoutFeedback>
  )
}