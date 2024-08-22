import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import RootScreen from './RootLayout';
import HomeScreen from '../screens/HomeScreen';
import { Bell } from 'lucide-react-native';

const Stack = createNativeStackNavigator();

const HomeScreenLayout = () => {
 return (
  <Stack.Navigator>
   <Stack.Group>
    <Stack.Screen name="Home" component={HomeScreen} options={{
      headerRight: () => (
       <Bell
         size={24}
         color={'#05A845'}
       />
     ),
    }} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default HomeScreenLayout