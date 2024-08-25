import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text, View } from 'tamagui';
// import { Product } from '../public/data';
import CardStack from '../component/CardStack';
import { storage, useFavi } from '../state/faviroutesState';
import { chunkArray } from '../utils/utils';
import { HeartCrack } from 'lucide-react-native';


const FavoritesScreen = ({ navigation }: {
 navigation: any;
}) => {
 const { bookmark, setBookmark } = useFavi();
 let SavedProduct: any[] = [];
 let ProductList = storage.getAllKeys()

 useEffect(() => {
  storage.getAllKeys().map(async (id) => {
   if (typeof id !== "number") {
    SavedProduct.push(JSON.parse(storage.getString(id) as string));
   }
  })
 }, [bookmark])


 ProductList.map(async (id) => {
  if (typeof id !== "number") {
   SavedProduct.push(JSON.parse(storage.getString(id) as string));
  }
 })


 const Product = chunkArray(SavedProduct, 2);

 return (
  <FlatList
   data={Product}
   style={{
    paddingHorizontal: 3,
    marginVertical: 6,
    gap: 3,
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
   }}
   ListEmptyComponent={() => (
    <View f={1} ai='center' h='$20' jc='flex-end' gap='$3'>
     <HeartCrack size={100} color='#05A845' />
     <Text fontSize='$5' fontWeight='bold' color='black'>Your Cart Look's Empty!!</Text>
     <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text color='$black1' textDecorationLine='underline'>Continure Shopping</Text>
     </TouchableOpacity>
    </View>
   )
   }
   renderItem={({ item, index }) => (
    <CardStack key={index} item={item} />
   )}
  />
 );
};

export default FavoritesScreen;
