/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import { Home, Login, Map, Register, ScanAI, Profile } from '../screens';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Map'
        component={Map}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ScanAI'
        component={ScanAI}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  );
}
