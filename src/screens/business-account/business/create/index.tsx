import { Box, HStack, Image, Text } from 'native-base'
import React from 'react'
import StepIndicatorComponent from './StepIndicator';
import { Sphere } from '@src/components/svgs/Sphere.svg'
import { StyleSheet } from 'react-native'
import { CreateBusinessInformation } from './steps/Information';

const labels = ['Details', 'Intro', 'Information']
export default function CreateBusinessScreen() {
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
      <StepIndicatorComponent currentPosition={4} labels={labels} />

      {/* Steps */}
      <CreateBusinessInformation />
    </Box>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})