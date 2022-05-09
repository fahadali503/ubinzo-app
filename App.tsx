import { HStack, NativeBaseProvider, Spinner } from 'native-base'
import { SkypeIndicator } from 'react-native-indicators';
import { useFont } from './src/hooks/use-font';
import GetStartedScreen from './src/screens/get-started';
import { nativeBaseThemeConfig } from './src/utils/nativebase-config';
import ignoreWarnings from 'react-native-ignore-warnings';

// This is for development purposes. I have added the line because everytime the GetStarted Screen render, this error appear. So I disabled it. This doesn't effect any code. It is just for development purposes.
ignoreWarnings("log", "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types")

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