import { Link } from '@react-navigation/native';
import React from 'react';
import { Image, Paragraph, View, YStack } from 'tamagui';

const CatogorieCard = ({ item }: { item: any }) => {
 const truncatedCategoryName = item?.categoryName
  ? item.categoryName.length > 15
   ? item.categoryName.substring(0, 15) + '...'
   : item.categoryName
  : '';
 return (
  <View jc='center' f={1}>
   <Link to={`/cart/promoCode`}>
    <YStack
     alignItems="center"
     borderRadius="$5"
     margin="$2"
    >
     <Image
      alignSelf="center"
      alignItems="center"
      borderRadius="$5"
      margin="$0.75"
      source={{
       width: 100,
       height: 100,
       uri: item?.categoryImage,
      }}
     />
     <Paragraph numberOfLines={1} width='unset'>{truncatedCategoryName}</Paragraph>
    </YStack>
   </Link>
  </View>
 );
}


export default CatogorieCard;
