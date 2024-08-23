import { ArrowDown, ArrowRight, Heart, Search, ShoppingCart, X } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, H2, Image, Input, Paragraph, ScrollView, Text, View, XStack, YStack, ZStack } from 'tamagui';
import { Link } from '@react-navigation/native';



const HomeScreen = ({ navigation }: {
 navigation: any;
}) => {
 return (
  <View flex={1}>
   <SafeAreaView style={{ flex: 1 }}>
    <ScrollView f={1}>
     <XStack justifyContent="center" paddingHorizontal='unset' marginInline='unset' alignItems="center" borderColor='$colors.primary' marginHorizontal='$6' borderRadius='$4' borderWidth='$1'>
      <Input
       // size="$4"
       bg='$colorTransparent'
       shadowColor="$shadowColor"
       shadowOpacity={50}
       shadowRadius={"$17"}
       // margin='$2'
       w={'$20'}
       paddingLeft='$3'
       shadowOffset={{ height: 20, width: 60 }}
       placeholder={`search products`}
       autoComplete="address-line1"
       unstyled
      >
      </Input>
      <View bg='$colors.primary' borderRadius='$4' padding='$2'>
      <Search size={34} color="white"  />
      </View>
     </XStack>
     <YStack gap="$4" margin='$2'>
      <XStack ai="center" gap="$4">
      </XStack>
     </YStack>
     <XStack
      ai="center"
      gap="$4"
      justifyContent="space-around"
      columnGap="$19"
     >
      <Text fontSize="$6">Catogories</Text>
      <Link to={''}>
       <Text fontSize="$3" color="$outlineColor">
        see More
       </Text>
      </Link>
     </XStack>
     <XStack
      ai="center"
      justifyContent="flex-start"
      paddingHorizontal="$4"
     >
      <Text fontSize="$6">NearBy You</Text>
     </XStack>
     <ScrollView horizontal>
      <XStack
       ai="center"
       gap="$4"
       justifyContent="space-around"
       paddingHorizontal="$4"
      // columnGap="$19"
      >
       <Card elevate size="$4" bordered w='$18' >
        <Card.Header padded>
         <H2>Sony A7IV</H2>
         <Paragraph theme="alt2">Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded>
         <XStack flex={1} />
         <Button borderRadius="$10">Purchase</Button>
        </Card.Footer>
        <Card.Background>
         <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
           width: 300,
           height: 300,
          }}
         />
        </Card.Background>
       </Card>
       <Card elevate size="$4" bordered >
        <Card.Header padded>
         <H2>Sony A7IV</H2>
         <Paragraph theme="alt2">Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded>
         <XStack flex={1} />
         <Button borderRadius="$10">Purchase</Button>
        </Card.Footer>
        <Card.Background>
         <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
           width: 300,
           height: 300,
          }}
         />
        </Card.Background>
       </Card>
       <Card elevate size="$4" bordered >
        <Card.Header padded>
         <H2>Sony A7IV</H2>
         <Paragraph theme="alt2">Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded>
         <XStack flex={1} />
         <Button borderRadius="$10">Purchase</Button>
        </Card.Footer>
        <Card.Background>
         <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
           width: 300,
           height: 300,
          }}
         />
        </Card.Background>
       </Card>
       <Card elevate size="$4" bordered >
        <Card.Header padded>
         <H2>Sony A7IV</H2>
         <Paragraph theme="alt2">Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded>
         <XStack flex={1} />
         <Button borderRadius="$10">Purchase</Button>
        </Card.Footer>
        <Card.Background>
         <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
           width: 300,
           height: 300,
          }}
         />
        </Card.Background>
       </Card>
      </XStack>
     </ScrollView>
     <View flex={1} flexDirection='row' ai='center' gap='$12' jc='space-between'>
      <Text fontSize="$9" color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
      <ArrowRight size={24} color="black" />
     </View>
     <XStack paddingHorizontal='$3'>
      <ScrollView horizontal f={1} gap='$7'>
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
            uri: 'https://via.placeholder.com/150',
           }}
          />
          <Paragraph numberOfLines={1} color='navy' width='unset'>{'hello'}</Paragraph>
         </YStack>
        </Link>
       </View>
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
            uri: 'https://via.placeholder.com/150',
           }}
          />
          <Paragraph numberOfLines={1} width='unset'>{'hello'}</Paragraph>
         </YStack>
        </Link>
       </View>
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
            uri: 'https://via.placeholder.com/150',
           }}
          />
          <Paragraph numberOfLines={1} width='unset'>{'hello'}</Paragraph>
         </YStack>
        </Link>
       </View>
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
            uri: 'https://via.placeholder.com/150',
           }}
          />
          <Paragraph numberOfLines={1} width='unset'>{'hello'}</Paragraph>
         </YStack>
        </Link>
       </View>
      </ScrollView>
     </XStack>
    </ScrollView>
    <YStack f={1}>
     <View flex={1} flexDirection='row' ai='center' gap='$12' jc='space-between'>
      <Text fontSize="$9" color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
      <ArrowRight size={24} color="black" />
     </View>
     <XStack paddingHorizontal='$3' f={1}>
      <Card elevate size="$4" bordered f={1.5}>
       <Card.Header padded>
        <View borderBlockColor='$colors.primary' borderColor='$colors.primary' borderWidth='$1' borderRadius='$3' p='$2' alignItems='center'>
         {/* <ZStack top={160} left={330} > */}
         <Heart size={27} color='red' />
         {/* </ZStack> */}
         <Image source={{ uri: 'https://via.placeholder.com/150' }}
          width={100} height={100}
         />
        </View>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
       </Card.Header>
       <Card.Footer padded>
        <YStack>
         <XStack>
          <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
          <ArrowDown size={24} color="black" />
         </XStack>
         <XStack>
          <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
          <ArrowDown size={24} color="black" />
         </XStack>
        </YStack>
        <XStack flex={1} />
        <Button borderRadius="$14">
         <ShoppingCart size={24} color="black" />
        </Button>
       </Card.Footer>
      </Card>
      <Card elevate size="$4" bordered f={1.5}>
       <Card.Header padded>
        <View borderBlockColor='$colors.primary' borderColor='$colors.primary' borderWidth='$1' borderRadius='$3' p='$2' alignItems='center'>
         {/* <ZStack top={160} left={330} > */}
         <Heart size={27} color='red' />
         {/* </ZStack> */}
         <Image source={{ uri: 'https://via.placeholder.com/150' }}
          width={100} height={100}
         />
        </View>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
       </Card.Header>
       <Card.Footer padded>
        <YStack>
         <XStack>
          <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
          <ArrowDown size={24} color="black" />
         </XStack>
         <XStack>
          <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
          <ArrowDown size={24} color="black" />
         </XStack>
        </YStack>
        <XStack flex={1} />
        <Button borderRadius="$14">
         <ShoppingCart size={24} color="black" />
        </Button>
       </Card.Footer>
      </Card>
     </XStack>
    </YStack>
   </SafeAreaView>
  </View >
 );
};

export default HomeScreen;
