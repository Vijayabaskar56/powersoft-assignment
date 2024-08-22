import React from 'react';
import { Button, Text, View } from 'tamagui';

const FavoritesScreen = ({ navigation } : {
 navigation: any;
}) => {
 return (
  <View >
   <Text >Home Screen</Text>
   <Button theme="blue">Hello world</Button>
   <Button
    onPress={() => navigation.navigate('Details')}
   />
  </View>
 );
};

export default FavoritesScreen;
