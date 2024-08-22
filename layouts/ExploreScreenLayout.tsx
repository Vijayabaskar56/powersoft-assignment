import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SearchScreen from '../screens/SearchScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Stack = createNativeStackNavigator();

const ExploreScreenLayout = () => {
 return (
  <Stack.Navigator>
   <Stack.Group>
    <Stack.Screen name="Explore" component={ExploreScreen} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default ExploreScreenLayout