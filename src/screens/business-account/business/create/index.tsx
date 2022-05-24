import { Box, HStack, Image, Text } from 'native-base'
import React, { useMemo, useRef, useState } from 'react'
import StepIndicatorComponent from './steps/StepIndicator';
import { StyleSheet } from 'react-native'
import { CreateBusinessInformation } from './steps/Information';
import Intro from './steps/Intro';
import Details from './steps/Details';
import Wizard from 'react-native-wizard';
import { WizardProps } from '@src/utils/types/common.types';


const labels = ['Information', 'Intro', 'Details']
export default function CreateBusinessScreen() {

  const [isFirstStep, setIsFirstStep] = useState(true)
  const [isLastStep, setIsLastStep] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const wizardRef = useRef<WizardProps>(null);
  const stepList = useMemo(() => {
    return [
      {
        content: <CreateBusinessInformation wizardRef={wizardRef} />
      },
      { content: <Intro wizardRef={wizardRef} /> },
      { content: <Details wizardRef={wizardRef} /> },
    ]
  }, [])

  return (
    <Box flex={1} safeArea>
      {/* Images */}
      <Image position={'absolute'} resizeMode='cover' borderRadius={150} top={-40} left={-60} size={300} source={require('@assets/images/spline.png')} alt={'SPline'} />
      <Image position={'absolute'} resizeMode='cover' borderRadius={150} bottom={-40} right={-60} size={300} source={require('@assets/images/spline.png')} alt={'SPline'} />
      {/* End Images */}

      {/* Screen Heading */}
      <HStack my={3} justifyContent={'center'}>
        <Text fontSize={28} fontWeight={'semibold'} color={'white'} letterSpacing={3}>Create Bu</Text>
        <Text fontSize={28} fontWeight={'semibold'} letterSpacing={3}>siness</Text>
      </HStack>
      {/* Step Indicators */}
      <StepIndicatorComponent currentPosition={currentStep} labels={labels} />

      {/* Steps */}
      <Wizard
        ref={wizardRef}
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
        contentContainerStyle={{ flex: 1 }}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})