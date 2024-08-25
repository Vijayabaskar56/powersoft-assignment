import { ArrowDown, ArrowRight, ChevronsUpDown, Heart, Search, ShoppingCart, Star, X } from 'lucide-react-native';
import React from 'react';
import { Button, Card, H2, Image, Input, Paragraph, ScrollView, Text, View, XStack, YStack, ZStack } from 'tamagui';
import { Link, NavigationProp } from '@react-navigation/native';
import { FlatList, SafeAreaView, Touchable, TouchableOpacity } from 'react-native';
import { Category, Product } from '../public/data';
import SearchBar from '../component/SearchBar';
import CardStack from '../component/CardStack';

const HomeScreen = ({ navigation }: {
 navigation: NavigationProp<any>;
}) => {
 return (
  <SafeAreaView style={{ flex: 1, marginHorizontal: 6 }}>
   <View flex={1} bg='white'>
    <ScrollView f={1}>
     <View marginHorizontal='$true' mt='$2'>
      <SearchBar isExplore={false} />
     </View>
     <ScrollView horizontal
      marginHorizontal='$1'
      marginVertical='$6'
     >
      <XStack
       f={1}
       ai="center"
       gap="$4"
       justifyContent="space-around"
       paddingHorizontal="$4"
      >
       <Card f={1} size="$4" w='$18' radiused borderRadius='$10'>
        <Card.Header padded gap='$3'>
         <Paragraph fontSize='$5' color='black'>Every Day Fresh And Clean With Your Products</Paragraph>
         <Button backgroundColor='$colors.primary' w='$9' h='$2' padding='$0'>Show Now</Button>
        </Card.Header>
        <Card.Background>
         <Image
          resizeMode="contain"
          alignSelf="center"
          borderRadius='$10'
          source={require('../public/bannerImage1.png')}
         />
        </Card.Background>
       </Card>
       <Card f={1} size="$4" w='$18' radiused borderRadius='$10'>
        <Card.Header padded gap='$3' h='$11'>
         <Paragraph fontSize='$5' color='black'>Every Day Fresh And Clean With Your Products</Paragraph>
         <Button backgroundColor='$colors.primary' w='$9' h='$2' padding='$0'>Show Now</Button>
        </Card.Header>
        <Card.Background>
         <Image
          resizeMode="contain"
          alignSelf="center"
          borderRadius='$10'
          source={require('../public/bannerImage1.png')}
         />
        </Card.Background>
       </Card>
       <Card f={1} size="$4" w='$18' radiused borderRadius='$10'>
        <Card.Header padded gap='$3' h='$11'>
         <Paragraph fontSize='$5' color='black'>Every Day Fresh And Clean With Your Products</Paragraph>
         <Button backgroundColor='$colors.primary' w='$9' h='$2' padding='$0'>Show Now</Button>
        </Card.Header>
        <Card.Background>
         <Image
          resizeMode="contain"
          alignSelf="center"
          borderRadius='$10'
          source={require('../public/bannerImage1.png')}
         />
        </Card.Background>
       </Card>
      </XStack>
     </ScrollView>
     <View flex={1} flexDirection='row' ai='center' gap='$12' jc='space-between' mb='$3'>
      <Text fontSize="$8" color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
      <ArrowRight size={24} color="#05A845" />
     </View>
     <FlatList
      data={Category}
      horizontal
      scrollEnabled
      style={{
       marginHorizontal: 1,
       marginVertical: 6,
      }}
      keyExtractor={(_, index) => index.toString()}
      scrollEventThrottle={16}
      renderItem={({ item }) => (
       <View jc='center'>
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
           margin="$2"
           source={{
            width: 80,
            height: 80,
            uri: item.imageUrl,
           }}
          />
          <Paragraph numberOfLines={1} color='black' width='unset'>{item.name}</Paragraph>
         </YStack>
        </Link>
       </View>
      )}
     />
     <YStack f={1} mt='$3'>
      <View flex={1} flexDirection='row' ai='center' gap='$12' jc='space-between'>
       <Text fontSize="$8" color="$black1" fontWeight='bold' textAlign='center'>Trending Deals</Text>
       <TouchableOpacity onPress={() => navigation.navigate("ExploreLayout")}>
       <ArrowRight size={24} color="#05A845" />
       </TouchableOpacity>
      </View>
      <View>
      </View>
      <FlatList
       data={Product}
       keyExtractor={(_, index) => index.toString()}
       style={{
        paddingHorizontal: 3,
        marginVertical: 6,
        gap: 3,
       }}
       renderItem={({ item, index }) => (
        <CardStack key={index} item={item} />
       )}
      />
     </YStack>
    </ScrollView>
   </View >
  </SafeAreaView>
 );
};

export default HomeScreen;
