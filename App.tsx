/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import { TamaguiProvider } from 'tamagui';

import tamaguiConfig from './tamagui.config';
import { CartProvider } from './state/appState';
import AppLayout from './layouts/AppLayout';
import { FaviProvider } from './state/faviroutesState';
import { PriceProvider } from './state/priceState';
import { SessionProvider, useSession } from './state/sessionState';
import { LogBox } from 'react-native';



function App(): React.JSX.Element {
  const colorScheme = useColorScheme() ?? 'light';
  LogBox.ignoreAllLogs();
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <SessionProvider>
            <FaviProvider>
              <CartProvider>
                <PriceProvider>
                  <StatusBar
                    barStyle="default" translucent={true}
                  />
                  <AppLayout />
                </PriceProvider>
              </CartProvider>
            </FaviProvider>
          </SessionProvider>
        </NavigationContainer>
      </ThemeProvider>
    </TamaguiProvider >
  );
}

export default App;
