import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginScreen } from '@src/screens/auth/login';
import RegisterScreen from '@src/screens/auth/register';
import GetStartedScreen from '@src/screens/get-started';
import { GET_STARTED_SCREEN_NAMES } from './screen-names';

const Stack = createNativeStackNavigator();

type GetStartedParamList = {
    [GET_STARTED_SCREEN_NAMES.REGISTER]: undefined;
    [GET_STARTED_SCREEN_NAMES.HOME]: undefined;
    [GET_STARTED_SCREEN_NAMES.LOGIN]: undefined;
}

export type GetStartedNavigationProps = NativeStackNavigationProp<GetStartedParamList>

export const GetStartedNavigation = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={GET_STARTED_SCREEN_NAMES.HOME} component={GetStartedScreen} />
        <Stack.Screen name={GET_STARTED_SCREEN_NAMES.REGISTER} component={RegisterScreen} />
        <Stack.Screen name={GET_STARTED_SCREEN_NAMES.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
}
