import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SearchScreen from '../screens/SearchScreen';
import ExploreScreen from '../screens/ExploreScreen';
import { Text, View } from 'tamagui';
import { ArrowLeft, BellDot, UserCircle2 } from 'lucide-react-native';

const Stack = createNativeStackNavigator();

const ExploreScreenLayout = () => {
 return (
  <Stack.Navigator screenOptions={{
   animation: 'slide_from_right',
   headerShown: true,
  }}>
   <Stack.Group screenOptions={{
    headerShown: true,
   }}>
    <Stack.Screen name="Explore" component={ExploreScreen} options={{
     headerShown: true,
     headerBackButtonMenuEnabled: true,
     headerTitle: () => (
      <View marginLeft='$12'>
       <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Trending Deails</Text>
      </View>
     ),
     headerRight: () => (
      <View f={0} flexDirection='row' ai='center' gap='$4'>
       <BellDot
        size={24}
        color={'#05A845'}
       />
      </View>
     ),
     headerLeft: () => (
      <View f={0} flexDirection='row' ai='center' gap='$4'>
       <ArrowLeft size={24} color="black" />
      </View>
     ),
    }} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default ExploreScreenLayout