import { extendTheme } from "native-base";

export const nativeBaseThemeConfig = extendTheme({
    fontConfig: {
        WorkSans: {
            100: {
                normal: 'WorkSans_100Thin',
                italic: 'WorkSans_100Thin_Italic',
            },
            200: {
                normal: 'WorkSans_200ExtraLight',
                italic: 'WorkSans_200ExtraLight_Italic',
            },
            300: {
                normal: 'WorkSans_300Light',
                italic: "WorkSans_300Light_Italic",
            },
            400: {
                normal: 'WorkSans_400Regular',
                italic: 'WorkSans_400Regular_Italic',
            },
            500: {
                normal: 'WorkSans_500Medium',
                italic: 'WorkSans_500Medium_Italic'
            },
            600: {
                normal: 'WorkSans_600SemiBold',
                italic: 'WorkSans_600SemiBold_Italic'
            },
            // Add more variants
            700: {
                normal: 'WorkSans_700Bold',
                italic: 'WorkSans_700Bold_Italic'
            },
            800: {
                normal: 'WorkSans_800ExtraBold',
                italic: 'WorkSans_800ExtraBold_Italic'
            },
            900: {
                normal: 'WorkSans_900Black',
                italic: 'WorkSans_900Black_Italic'
            },
        },
    },
    fonts: {
        heading: 'WorkSans',
        body: 'WorkSans',
        mono: 'WorkSans',
    },
})