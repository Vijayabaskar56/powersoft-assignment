import { ChevronsUpDown, Heart, ShoppingCart, Star } from 'lucide-react-native'
import React from 'react'
import { Button, Card, Image, Paragraph, View, XStack, YStack, ZStack } from 'tamagui'
import { ProductItem } from '../types';
import { handleFavi } from '../utils/handleFavi';
import { useFavi } from '../state/faviroutesState';
import { useCartContext } from '../state/appState';
import { handleCartAction } from '../utils/handleCart';

const CardStack = ({
 item
}: {
 item: ProductItem[];
}) => {
 const { setCart, cart } = useCartContext();
 const { bookmark, setBookmark } = useFavi();


 return (
  <XStack f={1}>
   {item.map((product: ProductItem, index) => (
    < Card elevate f={0.5} p='$3' bg='white' paddingHorizontal='$3' marginVertical='$3' marginHorizontal='$2' >
     <View f={1} borderBlockColor='$colors.primary' borderColor='$colors.primary' borderWidth='$1' borderRadius='$3' p='$2' alignItems='center'>
      <ZStack zIndex={1} onPress={() => handleFavi(setBookmark, product)}>
       <Heart size={27} color='green' fill={bookmark?.includes(product?.id) ? "green" : "transparent"} style={{ left: 34, bottom: 3 }} />
      </ZStack>
      <Image source={{ uri: product?.imageUrl ?? require('../public/placeholder.jpg') }}
       objectFit='contain'
       containerType='normal'
       padding='$2'
       width={80} height={120}
      />
     </View>
     <XStack mt='$3' justifyContent='space-between'>
      <Paragraph theme="alt2" fontSize='$5' fontWeight='bold' color='$black1'>{product?.name}</Paragraph>
      <Paragraph theme="alt2" fontSize='$2' fontWeight='bold' color='$colors.primary'>{`RS ${product.price ?? 0}`}</Paragraph>
     </XStack>
     <XStack flex={1} justifyContent='space-between' ai='flex-end'>
      <XStack ai='flex-start' gap='$2'>
       <YStack ai='flex-start'>
        <Paragraph theme="alt2" fontSize='$3' color="$black1">{product.quantity}</Paragraph>
        <Paragraph theme="alt2" fontSize='$2' >Quantity</Paragraph>
       </YStack>
       <YStack ai='flex-start' jc='flex-start'>
        <XStack ai='center' jc='flex-start'>
         <Star size={12} color="gold" fill='gold' />
         <Paragraph theme="alt2" fontSize='$3' color='$black1'>{product.rating}</Paragraph>
        </XStack>
        <XStack ai='center' jc='flex-start'>
         <ChevronsUpDown size={12} color="#05A845" />
         <Paragraph theme="alt2" fontSize='$2' color='$accentBackground'>{product.quality}</Paragraph>
        </XStack>
       </YStack>
      </XStack>
      <Button backgroundColor='$colors.primary' onPress={() => handleCartAction(setCart, product)} justifyContent='center' ai='center' w='$3' h='$3' borderRadius='$size.19'>
       <ShoppingCart size={15} color="white" fill={cart?.includes(product?.id) ? "white" : "none"} />
      </Button>
     </XStack>
    </Card>
   ))
   }
  </XStack >
 )
}

export default CardStack

