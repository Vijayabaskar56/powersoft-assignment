import React, { useEffect } from 'react';
import { Button, Card, H4, Image, Paragraph, ScrollView, Text, View, XStack, YStack } from 'tamagui';
import CartCard from '../component/CartCard';
import { useCartContext, CartStore } from '../state/appState';
import { FlatList, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { LucideShoppingCart } from 'lucide-react-native';

const CartScreen = ({ navigation }: {
 navigation: NavigationProp<any>;
}) => {
 const { cart, setCart } = useCartContext();
 let cartList: any[] = [];
 let savedCartItem = CartStore.getAllKeys()

 savedCartItem.map(async (id) => {
  if (typeof id !== "number") {
   cartList.push(JSON.parse(CartStore.getString(id) as string));
  }
 })

 useEffect(() => {
  CartStore.getAllKeys().map(async (id) => {
   if (typeof id !== "number") {
    savedCartItem.push(JSON.parse(CartStore.getString(id) as string));
   }
  })
 }, [cart])

 console.log(cartList, 'cartList', cart);



 return (
  <View f={1} mb='$2'>
   <FlatList
    data={cartList}
    keyExtractor={(item, index) => index.toString()}
    ListEmptyComponent={() => (
     <View f={1} ai='center' h='$20' jc='flex-end' gap='$3'>
      <LucideShoppingCart size={100} color='#05A845' />
      <Text fontSize='$5' fontWeight='bold' color='black'>Your Cart Look's Empty!!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
       <Text color='$black1' textDecorationLine='underline'>Continure Shopping</Text>
      </TouchableOpacity>
     </View>
    )
    }
    renderItem={({ item, index }) => (
     <CartCard key={item?.id} item={item} index={index} type='cart' />
    )}
   />
   <View f={1} jc='center'>
   </View>
   <View f={1} jc='flex-end' gap='$4'>
    <Button onPress={() => navigation.goBack()} borderColor='$colors.primary' variant='outlined' color='white' borderRadius='$8' h='$5' fontSize='$6' fontWeight='bold'>
     <Text color='$black1'>Continure Shopping</Text>
    </Button>
    <Button onPress={() => navigation.navigate('Checkout')} bg='$colors.primary' color='white' borderRadius='$8' h='$5' fontSize='$6' fontWeight='bold'>
     <Text color='$black1'>Checkout</Text>
    </Button>
   </View>
  </View>
 );
};

export default CartScreen;
