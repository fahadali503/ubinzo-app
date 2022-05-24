import { Colors } from '@src/utils/colors'
import { Button } from 'native-base'
import { IButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';
import React from 'react'

interface Props extends IButtonProps {
    text: string
}

export const RoundedButton: React.FC<Props> = (props: Props) => {
    return (
        <Button size={'md'} backgroundColor={'white'}
            _text={{ color: Colors.blueBackgroundColor, fontWeight: "semibold", fontSize: "xl" }}
            width={'80%'}
            mx={"auto"}
            rounded={"2xl"}
            {...props}
        >
            {props.text}
        </Button>
    )
}