import {
    WorkSans_100Thin, WorkSans_100Thin_Italic, WorkSans_200ExtraLight, WorkSans_200ExtraLight_Italic, WorkSans_300Light, WorkSans_300Light_Italic, WorkSans_400Regular, WorkSans_400Regular_Italic, WorkSans_500Medium, WorkSans_500Medium_Italic, WorkSans_600SemiBold, WorkSans_600SemiBold_Italic, WorkSans_700Bold, WorkSans_700Bold_Italic, WorkSans_800ExtraBold, WorkSans_800ExtraBold_Italic, WorkSans_900Black, WorkSans_900Black_Italic,
    useFonts

} from '@expo-google-fonts/dev';
import { useEffect, useState } from 'react';
import { loadAsync } from 'expo-font'

export const useFont = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFontAsync()
    }, [])

    const loadFontAsync = async () => {
        try {
            await loadAsync({
                WorkSans_100Thin_Italic,
                WorkSans_100Thin,
                WorkSans_200ExtraLight, WorkSans_200ExtraLight_Italic, WorkSans_300Light, WorkSans_300Light_Italic, WorkSans_400Regular, WorkSans_400Regular_Italic, WorkSans_500Medium, WorkSans_500Medium_Italic, WorkSans_600SemiBold, WorkSans_600SemiBold_Italic, WorkSans_700Bold, WorkSans_700Bold_Italic, WorkSans_800ExtraBold, WorkSans_800ExtraBold_Italic, WorkSans_900Black, WorkSans_900Black_Italic
            });
            setLoading(true);
        } catch (error) {
            setLoading(true);
        }
    }

    return {
        fontsLoaded: loading
    }
}  