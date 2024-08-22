import { ArrowDown, ArrowLeft, ArrowRight, BellDot, Heart, Search, ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { Button, Card, Image, Input, Paragraph, ScrollView, Text, View, XStack, YStack } from 'tamagui';

const ExploreScreen = ({ navigation }: {
 navigation: any;
}) => {
 return (
  <View pt='$4' f={1}>
   <View flex={0.2} flexDirection='row' ai='center' gap='$12' jc='space-between'>
    <ArrowLeft size={24} color="black" />
    <Text fontSize="$9" color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
    <BellDot size={24} color="black" />
   </View>
   <View f={1}>
    <XStack justifyContent="center" alignItems="center">
     <Input
      size="$4"
      bg='$colorTransparent'
      shadowColor="$shadowColor"
      shadowOpacity={50}
      shadowRadius={"$17"}
      margin='$2'
      w={'$20'}
      shadowOffset={{ height: 20, width: 60 }}
      placeholder={`search products`}
      autoComplete="address-line1"
     />
     <Search size={24} color="white" style={{ backgroundColor: '#05a845', padding: 15, }} />
    </XStack>
    <ScrollView f={3}>
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
    </ScrollView>
   </View>
  </View>
 );
};

export default ExploreScreen;
