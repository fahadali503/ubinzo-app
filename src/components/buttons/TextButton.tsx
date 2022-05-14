import React from 'react'
import { IButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';
import { Button } from 'native-base';

type Props = {
    text: string
} & IButtonProps
export const TextButton = ({ text, ...props }: Props) => {
    return (
        <Button
            width={'80%'}
            mx={"auto"}
            variant={'unstyled'}
            {...props}
            _text={{ color: "white", fontWeight: "bold", fontSize: "xl" }}
        >{text}</Button>
    )
}