/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { TamaguiProvider } from 'tamagui';
import RootScreen from './layouts/RootLayout';
import LoginScreen from './screens/LoginScreen';
import tamaguiConfig from './tamagui.config';

const Stack = createNativeStackNavigator();



function App(): React.JSX.Element {
  const colorScheme = useColorScheme() ?? 'light';


  const isLoggedIn = true;

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <StatusBar
            barStyle="default" translucent={true}
          />
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            {isLoggedIn ? (
              <Stack.Group screenOptions={{
                headerShown: false,
              }}>
                <Stack.Screen name="Home" component={RootScreen} />
              </Stack.Group>
            ) : (
              <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={LoginScreen} />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </TamaguiProvider>
  );
}

export default App;
