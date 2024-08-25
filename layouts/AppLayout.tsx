import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import RootScreen from './RootLayout';
import LoginScreen from '../screens/LoginScreen';
import { useSession } from '../state/sessionState';

const Stack = createNativeStackNavigator();


const AppLayout = () => {
 const { session } = useSession();
 let isLoggedIn = session && session.id ? true : false;
 useEffect(() => {
  isLoggedIn = session?.id ? true : false;
  console.log(isLoggedIn, 'isLoggedIn');
  return () => {
   isLoggedIn = false;
  }
 }, [session])
 console.log(isLoggedIn, 'isLoggedIn');

 return (
  <>
   <Stack.Navigator screenOptions={{
    headerShown: false,
    navigationBarColor: 'transparent',
    animation: 'slide_from_right',
    // navigationBarHidden: true,
   }}>
    {isLoggedIn ? (
     <Stack.Group screenOptions={{
      headerShown: false,
     }}>
      <Stack.Screen name="Apps" component={RootScreen} />
     </Stack.Group>
    ) : (
     <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={LoginScreen} />
     </Stack.Group>
    )}
   </Stack.Navigator>
  </>
 )
}

export default AppLayout