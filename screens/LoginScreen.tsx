import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Button, Image, Input, Text, View, YStack } from 'tamagui';

const LoginScreen = ({ navigation }: {
 navigation: NavigationProp<any>;
}) => {
 return (
  <YStack width="100%" f={1}>
   <YStack f={3} bg="$colors.primary" backgroundImage={require('../public/vegitable_backdrop.png')} opacity={50} jc="center" ai="center" gap="$2">
    <Image src={require('../public/logo.png')} width={60} height={60} />
    <Text>EatGreen</Text>
   </YStack>
   <YStack f={6} h="$18" mx='$4' gap='$4'>
    <Text fontSize="$9" color="$black1" fontWeight='bold' textAlign='center'>Log In</Text>
    <Input placeholder="Email" themeInverse />
    <Input placeholder="Password" themeInverse />
    <Button bg='$colors.primary' onPress={() => navigation.navigate('Home')}>Log In</Button>
    <Text fontSize="$5" color="$colors.primary" fontWeight='normal' textAlign='center'>
     Forgot your password?
    </Text>
    <Text fontSize="$9" color="$black1" fontWeight='bold' textAlign='center'>Or</Text>
    <Button variant='outlined' onPress={() => navigation.navigate('Home')}>
     <Text color='black'>Continue with Google</Text>
    </Button>
    <Button variant='outlined' onPress={() => navigation.navigate('Home')}>
     <Text color='black'>Continue with FaceBook</Text>
    </Button>
   </YStack>
   <YStack f={0.5}>
    <Text fontSize="$5" color="$colors.primary" fontWeight='normal' textAlign='center'>
     Don’t have an account?
     <Text color="$colors.primary" fontWeight='bold' onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
    </Text>
   </YStack>
  </YStack>
 );
};

export default LoginScreen;
