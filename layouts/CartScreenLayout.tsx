import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const CartScreenLayout = () => {
 return (
  <Stack.Navigator>
   <Stack.Group>
    <Stack.Screen name="Cart" component={CartScreenLayout} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default CartScreenLayout