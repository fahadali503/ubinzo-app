import { ITextAreaProps, TextArea } from 'native-base'
import React from 'react'


export default function FormTextArea(props: ITextAreaProps) {
    return (
        <TextArea
            autoCompleteType={'off'}
            {...props}

            w="100%"
            maxW="300"
            size={'lg'}
        />
    )
}