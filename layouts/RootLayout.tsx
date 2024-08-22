/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, Heart, Home, LayoutGrid, Search, ShoppingCart } from 'lucide-react-native';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FaviroutsScreen';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import { Button, View } from 'tamagui';
import ExploreScreen from '../screens/ExploreScreen';
import HomeScreenLayout from './HomeScreenLayout';

const Tab = createBottomTabNavigator();

const RootScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#FBBC05',
      headerShown: false,
      tabBarVisibilityAnimationConfig: {
        show: {
          animation: 'spring',
          config: {
            delay: 100,
            isInteraction: true,
          },
        },
        hide: {
          animation: 'timing',
          config: {
            duration: 200,
          },
        },
      },
      tabBarInactiveTintColor: '#ffffff',
      unmountOnBlur: true,
      tabBarStyle: {
        height: 60,
        width: '100%',
        backgroundColor: '#05A845',
        borderTopWidth: 2,
        overflow: 'hidden',
        shadowColor: '#000',
        borderRadius: 20,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      tabBarItemStyle: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      tabBarLabelStyle: {
        display: 'none',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '500',
        backgroundColor: 'transparent',
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreenLayout} options={{
        title: 'Homee',
        tabBarIcon: ({ color }) => <Home size={24} color={color} />,
      }}
      />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => (
          <LayoutGrid
            size={24}
            color={color}
          />
        ),
      }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{
        title: 'Cart',
        tabBarIcon: () => (
          <View bg="white" p="$3" br="$9">
            <ShoppingCart
              size={24}
              color={'#05A845'}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="Faviouts" component={FavoritesScreen} options={{
        title: 'Faviouts',
        tabBarIcon: ({ color }) => (
          <Heart
            size={24}
            color={color}
          />
        ),
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        title: 'Search',
        tabBarIcon: ({ color }) => (
          <Search
            size={24}
            color={color}
          />
        ),
      }} />
    </Tab.Navigator>
  );
};

export default RootScreen;
