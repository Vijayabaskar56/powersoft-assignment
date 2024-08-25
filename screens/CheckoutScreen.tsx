
import { useEffect, useState } from 'react';
import { Button, H4, Image, Input, Paragraph, Separator, Sheet, Square, Text, View, XStack, YStack, } from 'tamagui';
import { CartStore, useCartContext } from '../state/appState';
import { FlatList } from 'react-native';
import CartCard from '../component/CartCard';
import { NavigationProp } from '@react-navigation/native';
import { usePriceContext } from '../state/priceState';


const CheckoutScreen = ({
 navigation
}: {
 navigation: NavigationProp<any>;
}) => {
 let cartList: any[] = [];
 let savedCartItem = CartStore.getAllKeys()
 const { quantity, setQuantity } = usePriceContext();


 savedCartItem.map(async (id) => {
  if (typeof id !== "number") {
   cartList.push(JSON.parse(CartStore.getString(id) as string));
  }
 })

 const shippingCost = 30;
 const subTotal = cartList.reduce((acc, item) => {
  const quantityFiltred = quantity.filter((v: any) => v?.item === item.id)[0]?.count ?? 0;
  const quantityNumber = Number(quantityFiltred);
  return quantityNumber ? acc + (item.price * quantityNumber) : acc + item.price;
 }, 0);

 const estimatedTax = subTotal * 2.9 / 100;
 const total = subTotal + shippingCost + estimatedTax;
 return (
  <View f={1} bg='white'>
   <View f={0.6} jc='center'>
    <FlatList
     data={cartList}
     keyExtractor={(item, index) => index.toString()}
     ListEmptyComponent={() => (
      <View f={1} ai='center' jc='center'>
       <Text fontSize='$5' fontWeight='bold'>Cart is Empty</Text>
      </View>
     )
     }
     renderItem={({ item, index }) => (
      <CartCard key={index} item={item} index={index} type='checkout' />
     )}
    />
   </View>
   <View f={0.4} jc='flex-end' gap='$4' bg='white' borderRadius='$9' borderBlockColor='$colorTransparent' borderWidth='$1' borderColor='$colors.primary'>
    <YStack f={1} p='$4' paddingHorizontal='$6' gap='$3' mt='$3'>
     <XStack f={1} jc='space-between'>
      <YStack gap='$4' jc='space-between' ai='flex-start' >
       <Text fontSize='$5'  color='black'>SubTotal</Text>
       <Text fontSize='$5'  color='black'>Shipping Cost</Text>
       <Text fontSize='$5'  color='black'>Estimated Tax</Text>
      </YStack>
      <YStack gap='$4' jc='space-between' ai='flex-start' >
       <Text fontSize='$5'  color='$colors.primary'>:</Text>
       <Text fontSize='$5'  color='$colors.primary'>:</Text>
       <Text fontSize='$5'  color='$colors.primary'>:</Text>
      </YStack>
      <YStack gap='$4' jc='space-between' ai='flex-start' >
       <Text fontSize='$5' color='$colors.primary'>{`₹ ${subTotal}`}</Text>
       <Text fontSize='$5' color='$colors.primary'>{`₹ ${shippingCost}`}</Text>
       <Text fontSize='$5' color='$colors.primary'>{`₹ ${estimatedTax.toFixed(2)}`}</Text>
      </YStack>
     </XStack>
     <Separator mt='$3' borderColor='$gray6Light' />
     <XStack jc='space-between'>
      <YStack gap='$4' jc='space-between' ai='flex-start' >
       <Text fontSize='$5' fontWeight='bold' color='black'>Total                    </Text>
      </YStack>
      <YStack gap='$4' jc='space-between' ai='flex-start' >
       <Text fontSize='$5' fontWeight='bold' color='$colors.primary'>:</Text>
      </YStack>
      <YStack gap='$4' jc='space-between' ai='flex-start' >
       <Text fontSize='$5' color='$colors.primary' fontWeight='bold'>{`₹ ${total.toFixed(2)}`}</Text>
      </YStack>
     </XStack>
    </YStack>
    <Button onPress={() => navigation.navigate('CompleteOrder')} bg='$colors.primary' color='white' borderRadius='$7' h='$5' fontSize='$6' fontWeight='bold'>
     <Text color="white" fontSize='$7' fontWeight={
      'bold'
     }>Proceed</Text>
    </Button>
   </View>
  </View>
 )
}

export default CheckoutScreen