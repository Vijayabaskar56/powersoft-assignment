import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Button, Image, Input, Text, View, YStack } from 'tamagui';
import { SessionStore, useSession } from '../state/sessionState';

const LoginScreen = ({ navigation }: {
 navigation: NavigationProp<any>;
}) => {
 const [email, setEmail] = React.useState('');
 const [password, setPassword] = React.useState('');
 const [emailError, setEmailError] = React.useState('');
 const [passwordError, setPasswordError] = React.useState('');
 const { session, setSession } = useSession();
 let sessions = SessionStore.getAllKeys()
 console.log(sessions, 'sessions', session);

 const validate = () => {
  let valid = true;
  if (!email) {
   setEmailError('Email is required');
   valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
   setEmailError('Email address is invalid');
   valid = false;
  } else {
   setEmailError('');
  }

  if (!password) {
   setPasswordError('Password is required');
   valid = false;
  } else {
   setPasswordError('');
  }

  return valid;
 };

 const handleCartAction = (setCart: any, item: any) => {
  setCart((prev: any) => {
   const isIdPresent = prev?.includes(item?.id);

   const updatedArray = isIdPresent
    ? prev.filter((id: any) => id !== item?.id) //
    : [...prev, item?.id]; // Add the ID

   return updatedArray;
  })

 }


 const handleLogin = () => {
  if (validate()) {
   setSession({
    id: Math.random(),
    email, password
   });
  }
  SessionStore.set(`${session?.id}`, JSON.stringify(session));
 };

 const handleSocialLogin = () => {
  setSession({
   id: Math.random(),
  });
  SessionStore.set(`${session?.id}`, JSON.stringify(session));
 }

 return (
  <YStack width="100%" f={1}>
   <YStack f={3} bg="$colors.primary" backgroundImage={require('../public/vegitable_backdrop.png')} opacity={50} jc="center" ai="center" gap="$2">
    <Image src={require('../public/logo.png')} width={60} height={60} />
    <Text>EatGreen</Text>
   </YStack>
   <YStack f={6} h="$18" mx='$4' gap='$4'>
    <Text fontSize="$9" color="$black1" fontWeight='bold' textAlign='center'>Log In</Text>
    <Input backgroundColor='white' placeholder="Email" placeholderTextColor='black' color='black' onChangeText={(value) => setEmail(value)} />
    {emailError ? <Text color="red">{emailError}</Text> : null}
    <Input backgroundColor='white' textContentType='password' placeholder="Password" placeholderTextColor='black' color='black' onChangeText={(value) => setPassword(value)} />
    {passwordError ? <Text color="red">{passwordError}</Text> : null}
    <Button bg='$colors.primary' onPress={() => handleLogin()}>Log In</Button>
    <Text fontSize="$5" color="$colors.primary" fontWeight='normal' textAlign='center'>
     Forgot your password?
    </Text>
    <Text fontSize="$9" color="$black1" fontWeight='bold' textAlign='center'>Or</Text>
    <Button variant='outlined' onPress={() => handleSocialLogin()}>
     <Text color='black' >Continue with Google</Text>
    </Button>
    <Button variant='outlined' onPress={() => handleSocialLogin()}>
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
