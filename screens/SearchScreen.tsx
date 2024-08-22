import React from 'react';
import { Button, Image, Text, View, YStack } from 'tamagui';

const SearchScreen = ({ navigation } : {
 navigation: any;
}) => {
 return (
  <View >
  <YStack f={3} bg="$colors.primary" backgroundImage={require('../public/vegitable_backdrop.png')} opacity={50} jc="center" ai="center" gap="$2">
    <Image src={require('../public/logo.png')} width={60} height={60} />
    <Text>EatGreen</Text>
   </YStack>
  </View>
 );
};

export default SearchScreen;
