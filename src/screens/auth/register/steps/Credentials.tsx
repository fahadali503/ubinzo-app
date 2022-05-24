import { Colors } from '@src/utils/colors'
import { SIGN_UP_ROLES } from '@src/utils/enums'
import { FormikProps } from 'formik'
import { CheckIcon, FormControl, Input, Select, View } from 'native-base'
import React from 'react'

type Props<T> = {
    signUpFormik: FormikProps<T>
}

export default function Credentials<T extends { [key: string]: any }>({ signUpFormik }: Props<T>) {
    const { errors, touched, handleBlur, handleChange, values } = signUpFormik;
    return (
        <View>
            {/* Email */}
            <FormControl isRequired isInvalid={'email' in errors && 'email' in touched}>
                <FormControl.Label _text={{ fontSize: "md" }}>Email</FormControl.Label>
                <Input onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    size='2xl'
                    backgroundColor={'gray.200'}
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontSize={"sm"}
                    placeholder={"john@doe.com"}
                />
                {'email' in errors && 'email' in touched && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
            </FormControl>
            {/* Password Field */}
            <FormControl isRequired isInvalid={'password' in errors && 'password' in touched}>
                <FormControl.Label _text={{ fontSize: "md" }}>Password</FormControl.Label>
                <Input type="password" onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    backgroundColor={'gray.200'}
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontSize={"sm"}
                    placeholder={"john@doe.com"}
                />
                {'password' in errors && 'password' in touched && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
            </FormControl>
            {/* Choose Account Type */}
            <FormControl isRequired isInvalid={'accountType' in errors && 'accountType' in touched}>
                <FormControl.Label _text={{ fontSize: "md" }}>Choose Account Type</FormControl.Label>
                <Select size='lg' onValueChange={handleChange("accountType")}
                    selectedValue={values.accountType} minWidth="200" accessibilityLabel="Choose Service"
                    backgroundColor={'gray.200'}
                    py={4}
                    px={4}
                    rounded={'2xl'}
                    fontWeight='medium'
                    fontSize={"sm"}
                    placeholder="Choose Service" _selectedItem={{
                        _text: {
                            color: "white",
                            fontWeight: "semibold"
                        },
                        bg: Colors.blueBackgroundColor,
                        endIcon: <CheckIcon size="5" color={"white"} />
                    }}
                    defaultValue={SIGN_UP_ROLES.USER} mt={1}>
                    {Object.values(SIGN_UP_ROLES).map((role) => <Select.Item key={role} label={role} value={role} />)}
                </Select>
                {'accountType' in errors && 'accountType' in touched && <FormControl.ErrorMessage>{errors.accountType}</FormControl.ErrorMessage>}
            </FormControl>
        </View>
    )
}