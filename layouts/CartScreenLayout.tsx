import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CartScreen from '../screens/CartScreen';
import OrderComplete from '../screens/OrderComplete';
import CheckoutScreen from '../screens/CheckoutScreen';
import { Text, View } from 'tamagui';
import { Trash2 } from 'lucide-react-native';
import { CartStore, useCartContext } from '../state/appState';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const CartScreenLayout = () => {
 const { setCart } = useCartContext();
 const emptycart = () => {
  setCart([])
  CartStore.clearAll()
 }

 return (
  <Stack.Navigator>
   <Stack.Group>
    <Stack.Screen name="MyCart" component={CartScreen} options={{
     headerShown: true,
     headerBackButtonMenuEnabled: true,
     headerTitle: () => (
      <View marginLeft='$17'>
       <Text fontSize='$7' fontWeight='bold' color='black' textAlign='center'>My Cart</Text>
      </View>
     ),
     headerRight: () => (
      <TouchableOpacity onPress={() => emptycart()}>
       <Trash2
        size={24}
        color={'#05A845'}
       />
      </TouchableOpacity>
     ),
    }} />
    <Stack.Screen name="Checkout" component={CheckoutScreen}
     options={{
      headerShown: true,
      headerBackButtonMenuEnabled: true,
      headerTitle: () => (
       <View marginLeft='$11' >
        <Text fontSize='$7' fontWeight='bold' color='black' textAlign='center'>Checkout</Text>
       </View>
      ),
     }}
    />
    <Stack.Screen name="CompleteOrder" component={OrderComplete} options={{
     headerShown: false,
    }} />
   </Stack.Group>
  </Stack.Navigator>
 )
}

export default CartScreenLayout