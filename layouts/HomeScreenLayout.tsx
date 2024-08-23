import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import RootScreen from './RootLayout';
import HomeScreen from '../screens/HomeScreen';
import { Bell, BellDot, UserCircle2 } from 'lucide-react-native';
import { Text, View } from 'tamagui';
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
        // headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          // headerShown: false,
          headerTitle: () => (
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Home</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>Some additional text</Text>
            </View>
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