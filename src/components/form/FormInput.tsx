import { IInputProps, Input } from 'native-base'
import React from 'react'


export default function FormInput({ ...props }: IInputProps) {
    return (
        <Input
            {...props}
            placeholder={props.placeholder}
            borderRadius={4}
            width={'100%'}
            size={'lg'}
        />
    )
}