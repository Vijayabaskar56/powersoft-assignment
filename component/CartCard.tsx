import React, { useEffect, useState } from 'react'
import { Button, Card, H4, Image, Text, View, XStack, YStack } from 'tamagui'
import { ProductItem } from '../types';
import { isOdd } from '../utils/utils';
import { TouchableOpacity } from 'react-native';
import { usePriceContext } from '../state/priceState';
import { updateQuantity } from '../utils/handlePrice';

const CartCard = ({ item, index, type }: {
 item: ProductItem;
 index: number;
 type: 'cart' | 'checkout';
}) => {
 const [count, setCount] = useState(1)
 const { quantity, setQuantity } = usePriceContext();


 const Remove = () => {
  if (count > 1) {
   setCount(count - 1)
   updateQuantity(setQuantity , item.id, count - 1);
  }
 }

 const Add = () => {
  setCount(count + 1)
  updateQuantity(setQuantity , item.id, count + 1);
 }


 useEffect(() => {
  const itemIndex = quantity.findIndex((q: any) => q.item === item.id);
  if (itemIndex !== -1) {
   setCount(quantity[itemIndex].count);
  }
 }, [quantity]);


 const quantityFiltred = quantity.filter((v : any) => v?.item === item.id)[0]?.count ?? null;

 return (
  <Card size="$2" >
   <XStack ai='center' background='white' bg={isOdd(index) ? '$white1' : '$green3Light'} paddingVertical='$4'>
    <XStack>
     <XStack borderRadius='$10' fd='row' gap='$3' pl='$4' ai='center'>
      <H4 color='$black1'>{index + 1}</H4>
      <Image src={item?.imageUrl ?? require('../public/placeholder.jpg')} width={60} borderRadius='$5' height={60} />
     </XStack>
     <YStack pl='$5'>
      <XStack gap='$3'>
       <Text fontWeight='b' color='$black1'>{item?.name}</Text>
       <Text color='$black1'>{item?.quantity}</Text>
      </XStack>
      <Text color='$black1'>View product details</Text>
      <XStack gap='$3' mt='$2' ai='center'>
       {
        type === 'checkout' &&
        <XStack gap='$3'>
         <Text color='$black1' fontWeight='bold'>{!quantityFiltred ? "1" : `${quantityFiltred}`}</Text>
         <Text color='$black1' fontWeight='bold'>x</Text>
         <Text color='$black1' fontWeight='bold'>{item?.price}</Text>
        </XStack>
       }
       {
        type === 'cart' &&
        <>
         <TouchableOpacity onPress={() => Remove()}>
          <Text color='$colors.primary' fontSize='$3' borderWidth='$0.5' borderColor='$colors.primary' w='$1.5' h='$1' textAlign='center' >
           -
          </Text>
         </TouchableOpacity>
         <Text color='$colors.primary'>{count}</Text>
         <TouchableOpacity onPress={() => Add()}>
          <Text color='$colors.primary' borderWidth='$0.5' borderColor='$colors.primary' w='$1.5' h='$1' textAlign='center' >
           +
          </Text>
         </TouchableOpacity>
        </>
       }
      </XStack>
     </YStack>
    </XStack>
    <View f={1} ai='flex-end' p='$4'>
     <Text color='$colors.primary' fontSize='$5' ai='flex-end' fontWeight='bold'>RS {`${item?.price * count}`}</Text>
    </View>
   </XStack>
  </Card>
 )
}



export default CartCard