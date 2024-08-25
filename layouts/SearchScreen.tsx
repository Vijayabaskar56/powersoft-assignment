import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const SearchScreenLayout = () => {
 return (
  <Stack.Navigator>
   <Stack.Group screenOptions={{
    headerShown: false,
   }}>
    <Stack.Screen name="Search" component={SearchScreen} options={{

    }} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default SearchScreenLayout