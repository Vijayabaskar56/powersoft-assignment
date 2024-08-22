import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FavoritesScreen from '../screens/FaviroutsScreen';

const Stack = createNativeStackNavigator();

const FaviroutsLayout = () => {
 return (
  <Stack.Navigator>
   <Stack.Group>
    <Stack.Screen name="Favirouts" component={FavoritesScreen} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default FaviroutsLayout