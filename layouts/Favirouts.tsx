import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FavoritesScreen from '../screens/FaviroutsScreen';
import { Text, View, XStack } from 'tamagui';
import { ArrowLeft, BellDot, HeartCrack, Trash2 } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { storage, useFavi } from '../state/faviroutesState';

const Stack = createNativeStackNavigator();

const FaviroutScreenLayout = () => {
 const { setBookmark ,session } = useFavi();

 const emptyFave = () => {
  setBookmark([])
  storage.clearAll()
 }
 return (
  <Stack.Navigator>
   <Stack.Group screenOptions={{
    headerShown: true,
   }}>
    <Stack.Screen name="Favirouts" component={FavoritesScreen} options={{
     headerShown: true,
     // statusBarHidden: true,
     headerTitle: () => (
      <View marginLeft='$15'>
       <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Favirouts</Text>
      </View>
     ),
     headerRight: () => (
      <TouchableOpacity onPress={() => emptyFave()}>
       <HeartCrack
        size={24}
        color={'#05A845'}
       />
      </TouchableOpacity>
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

export default FaviroutScreenLayout