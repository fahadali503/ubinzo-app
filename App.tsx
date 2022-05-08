import { HStack, NativeBaseProvider, Spinner } from 'native-base'
import { SkypeIndicator } from 'react-native-indicators';
import { useFont } from './src/hooks/use-font';
import GetStartedScreen from './src/screens/get-started';
import { nativeBaseThemeConfig } from './src/utils/nativebase-config';


export default function App() {
  const { fontsLoaded } = useFont();
  if (!fontsLoaded) {
    return <SkypeIndicator color='black' />
  }

  return (
    <NativeBaseProvider theme={nativeBaseThemeConfig}>
      <GetStartedScreen />
    </NativeBaseProvider>
  );
}