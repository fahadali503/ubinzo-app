import { FormControl, IFormControlLabelProps } from 'native-base'
import React from 'react'

interface Props extends IFormControlLabelProps {
    isRequired?: boolean;
    text: string;
    textBold?: boolean;
}

export const FormLabel = ({ isRequired = true, textBold = true, text }: Props) => {
    return (
        <FormControl.Label _text={{ bold: textBold, color: 'gray.600' }} isRequired={isRequired}>
            {text}
        </FormControl.Label>
    )
}