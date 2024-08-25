import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import RootScreen from './RootLayout';
import HomeScreen from '../screens/HomeScreen';
import { Bell, BellDot, MapPin, UserCircle2 } from 'lucide-react-native';
import { Text, View, XStack, YStack } from 'tamagui';
import { NavigationProp } from '@react-navigation/native';
// import { Avatar } from 'tamagui';

const Stack = createNativeStackNavigator();

const HomeScreenLayout = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{
        headerShown: true,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: true,
          headerTitle: () => (
            <YStack gap='$1'>
              <Text fontWeight='bold' fontSize='$8' color='black'>Home</Text>
              <XStack gap='$2' ai='center'>
                <MapPin size={20} color='gold' />
                <Text fontSize='$4' color='gray'>Peelamedu</Text>
              </XStack>
            </YStack>
          ),
          headerRight: () => (
            <View f={0} flexDirection='row' ai='center' gap='$4'>
              <BellDot
                size={24}
                color={'#05A845'}
              />
              <UserCircle2 size={34} color="black" />
            </View>
          ),
          headerBackButtonMenuEnabled: true,
        }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default HomeScreenLayout