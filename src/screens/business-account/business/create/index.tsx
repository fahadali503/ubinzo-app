import { Box, Image } from 'native-base'
import React from 'react'
import StepIndicatorComponent from './StepIndicator';
import { Sphere } from '@src/components/svgs/Sphere.svg'
import { StyleSheet } from 'react-native'

const labels = ['Details', 'Intro', 'Information']
export default function CreateBusinessScreen() {
  return (
    <Box flex={1} safeArea>
      <Image position={'absolute'} resizeMode='cover' borderRadius={150} top={-40} left={-60} size={300} source={require('@assets/images/spline2.png')} alt={'SPline'} />
      <Image position={'absolute'} resizeMode='cover' borderRadius={150} bottom={-40} right={-60} size={300} source={require('@assets/images/spline2.png')} alt={'SPline'} />
      {/* Step Indicators */}
      <StepIndicatorComponent currentPosition={0} labels={labels} />
    </Box>
  )
}

const styles = StyleSheet.create({

})