import { Colors } from '@src/utils/colors'
import { CheckIcon, ISelectProps, Select } from 'native-base'
import React from 'react'

interface IProps extends ISelectProps {
    list: string[]
}
export default function FormSelect({ list, ...props }: IProps) {
    return (
        <Select minWidth={'200'} {...props} _selectedItem={{
            bg: Colors.gray,
            endIcon: <CheckIcon size={5} />
        }}
            size={'lg'}
        >
            {list.map((type, index) => {
                return <Select.Item label={type} key={index} value={type} />
            })}
        </Select>
    )
}