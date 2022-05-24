import { SIGN_UP_ROLES } from '@src/utils/enums'
import { Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Select, Text, VStack } from 'native-base'
import React, { useMemo, useRef, useState } from 'react'
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LETTER_SPACING } from '@src/utils/constants';
import { Colors } from '@src/utils/colors';
import { RoundedButton } from '@src/components/buttons/RoundedButton';
import { WizardProps } from '@src/utils/types/common.types';
import Credentials from './steps/Credentials';
import InformationStep from './steps/Information';
import Wizard from 'react-native-wizard';


const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().min(4, 'Too Short!').required("Full Name is Required!"),
  email: Yup.string().email().required("Email is Required!"),
  password: Yup.string().min(8).max(50).required("Password is Required!"),
  username: Yup.string().min(4, 'Too Short!').matches(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/).required("Username is Required!"),
  accountType: Yup.string().required("Account Type is required!"),
  qualification: Yup.string().required('Qualification is Required!'),
  skills: Yup.array().min(1, 'Atleast 1 skill is required.')
});

const initialValues = {
  fullName: '',
  username: '',
  password: '',
  accountType: '',
  email: '',
  skills: '',
  qualification: ''
}
export default function RegisterScreen() {
  const [isFirstStep, setIsFirstStep] = useState(true)
  const [isLastStep, setIsLastStep] = useState(false)
  const [currentStep, setCurrentStep] = useState(0);

  const wizardRef = useRef<WizardProps>();
  const signUpFormik = useFormik({
    initialValues,
    onSubmit: (values => {
      console.log(values);
    }),
    validationSchema: SignUpSchema
  })

  const stepList = useMemo(() => ([
    { content: <InformationStep signUpFormik={signUpFormik} /> },
    {
      content: <Credentials signUpFormik={signUpFormik} />,
    },
  ]), [signUpFormik])
  // console.log(signUpFormik.values);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Center w='100%'>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="2xl" fontSize={30} color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} fontWeight="semibold">
            Sign Up
          </Heading>
          <VStack space={3} mt="10">
            {/* Username */}
            <Wizard
              ref={wizardRef}
              activeStep={0}
              steps={stepList}
              isFirstStep={val => setIsFirstStep(val)}
              isLastStep={val => setIsLastStep(val)}
              onNext={() => {
                console.log("Next Step Called")
              }}
              onPrev={() => {
                console.log("Previous Step Called")
              }}
              currentStep={({ currentStep, isLastStep, isFirstStep }) => {
                setCurrentStep(currentStep)
              }}
            />
            <HStack space={3}>
              {isLastStep && <RoundedButton
                backgroundColor={'white'}
                _text={{
                  color: Colors.blueBackgroundColor,
                  fontWeight: 'medium',
                  letterSpacing: LETTER_SPACING,
                  fontSize: "lg"
                }}
                onPress={() => wizardRef.current?.prev()}
                width={'50%'}
                size={"lg"}
                py={4}
                mt={1}
                text='Previous'
              />}
              {isLastStep && <RoundedButton
                backgroundColor={Colors.buttonBackgroundColor}
                _text={{
                  color: "white",
                  fontWeight: 'medium',
                  letterSpacing: LETTER_SPACING,
                  fontSize: "lg"
                }}
                width={'50%'}
                size={"lg"}
                onPress={() => signUpFormik.handleSubmit()}
                py={4}
                mt={1}
                text={'Sign Up'}
              />}
              {!isLastStep && <RoundedButton
                backgroundColor={Colors.buttonBackgroundColor}
                _text={{
                  color: "white",
                  fontWeight: 'medium',
                  letterSpacing: LETTER_SPACING,
                  fontSize: "lg"
                }}
                width={'50%'}
                size={"lg"}
                onPress={() => wizardRef.current?.next()}
                py={4}
                mt={1}
                text={'Next'}
              />}
            </HStack>
          </VStack>

          <Divider mt={2} />
          <HStack mt={2} space={2}>
            <Text color='gray.500' fontSize={17}>Already have an account?</Text>
            <Text color='gray.500' fontSize={17} fontWeight={'bold'}>Sign In</Text>
          </HStack>
        </Box>
      </Center>

    </TouchableWithoutFeedback>
  )
}