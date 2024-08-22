import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const SearchScreenLayout = () => {
 return (
  <Stack.Navigator>
   <Stack.Group>
    <Stack.Screen name="Search" component={SearchScreen} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default SearchScreenLayout