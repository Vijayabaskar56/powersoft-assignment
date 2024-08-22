import React from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { Button, Text, View, XStack, YStack } from 'tamagui';

const SigninScreen = ({ navigation }: {
 navigation: any;
}) => {
 return (
  <SafeAreaView>
   <View>
    <Text
    >
     Pharmeasy
    </Text>
   </View>

   <View gap={20} />
   <Pressable
    // onPress={async () => await signIn()}
   >
    <Text color="black">Sign up With Google</Text>
   </Pressable>
   <Pressable
    // onPress={async () => await signIn()}
   >
    <Text color="black">Sign up With Facebook</Text>
   </Pressable>
   <Pressable
    // onPress={async () => await signIn()}
   >
    <Text color="black">Login</Text>
   </Pressable>
   <YStack>
    <XStack width={300} marginTop={10}>
     <></>
    </XStack>
   </YStack>
  </SafeAreaView>
 );
};

export default SigninScreen;
