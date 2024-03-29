import { Box } from 'native-base'
import React from 'react'
import StepIndicator, { } from 'react-native-step-indicator';


type Props = {
    currentPosition: number;
    labels: string[]
}
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 16,
    currentStepIndicatorLabelFontSize: 16,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#c7c7c9',
    labelSize: 16,
    currentStepLabelColor: '#fe7013'
}
export default function StepIndicatorComponent({ currentPosition, labels }: Props) {
    return (
        <Box>
            <StepIndicator
                labels={labels}
                currentPosition={currentPosition}
                direction='horizontal'
                customStyles={customStyles}
                stepCount={3}
            />
        </Box>
    )
}