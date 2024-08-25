import { ArrowDown, ArrowLeft, ArrowRight, BellDot, Car, ChevronsUpDown, Heart, LayoutGridIcon, Search, ShoppingCart, Star } from 'lucide-react-native';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Button, Card, Image, Input, InputFrame, Paragraph, ScrollView, Text, View, XStack, YStack, ZStack } from 'tamagui';
import { Product } from '../public/data';
import CardStack from '../component/CardStack';

const ExploreScreen = ({ navigation }: {
  navigation: any;
}) => {
  return (
    <View pt='$2' f={1} bg='white'>
      <View f={1}>
        <XStack justifyContent="flex-start" borderTopLeftRadius={'$4'} borderBottomLeftRadius={'$4'} h='$4' marginHorizontal='$3' alignItems="center" w={'$20'} borderWidth='$1'
          outlineWidth='$1' borderRightColor='$colorTransparent' outlineColor='$colors.primary' borderColor='$colors.primary'>
          <InputFrame
            paddingHorizontal='$3'
            placeholder='Search products'
            unstyled
            w='100%'
          ></InputFrame>
          <View bg='$colors.primary' p='$2' borderTopEndRadius='$4' borderBottomEndRadius={'$4'} >
            <Search size={31} color="white" style={{ backgroundColor: '#05a845', }} />
          </View>
          <View ai='flex-end' ml='$3'>
            <LayoutGridIcon size={30} color='#05A845' fill='#05A845' />
          </View>
        </XStack>
          <FlatList
            data={Product}
            ListEmptyComponent={() => (
              <View f={1} ai='center' h='$20' jc='flex-end' gap='$3'>
               <LayoutGridIcon size={100} color='#05A845' />
               <Text fontSize='$5' fontWeight='bold' color='black'>Your Cart Look's Empty!!</Text>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text color='$black1' textDecorationLine='underline'>Continure Shopping</Text>
               </TouchableOpacity>
              </View>
             )
             }
            style={{
              paddingHorizontal: 3,
              marginVertical: 6,
              gap: 3,
              backgroundColor: 'white',
            }}
            renderItem={({ item, index }) => (
              <CardStack key={index} item={item} />
          )}
          />
      </View>
    </View>
  );
};

export default ExploreScreen;
