import React from 'react';
import { Button, Card, Image, Paragraph, ScrollView, Text, View, XStack, YStack } from 'tamagui';

const CartScreen = ({ navigation }: {
 navigation: any;
}) => {
 return (
  <View >
   <Text >Home Screen</Text>
   <ScrollView>
    <Card elevate size="$4" bordered f={1}>
     <Card.Header padded>
      <XStack>
       <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        width={100} height={100}
       />
       <YStack>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
       </YStack>
       <XStack>
        <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
       </XStack>
      </XStack>
     </Card.Header>
    </Card>
    <Card elevate size="$4" bordered f={1}>
     <Card.Header padded>
      <XStack>
       <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        width={100} height={100}
       />
       <YStack>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
       </YStack>
       <XStack>
        <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
       </XStack>
      </XStack>
     </Card.Header>
    </Card>
    <Card elevate size="$4" bordered f={1}>
     <Card.Header padded>
      <XStack>
       <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        width={100} height={100}
       />
       <YStack>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
       </YStack>
       <XStack>
        <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
       </XStack>
      </XStack>
     </Card.Header>
    </Card>
    <Card elevate size="$4" bordered f={1}>
     <Card.Header padded>
      <XStack>
       <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        width={100} height={100}
       />
       <YStack>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
        <Paragraph theme="alt2" color='$accentBackground'>Now available</Paragraph>
       </YStack>
       <XStack>
        <Text color="$black1" fontWeight='bold' textAlign='center'>Explore by category</Text>
       </XStack>
      </XStack>
     </Card.Header>
    </Card>
   </ScrollView>
   <Button onPress={() => navigation.navigate('Home')}>
    <Text>Go to Home</Text>
   </Button>
   <Button onPress={() => navigation.navigate('Explore')}>
    <Text>Go to Explore</Text>
   </Button>
  </View>
 );
};

export default CartScreen;
