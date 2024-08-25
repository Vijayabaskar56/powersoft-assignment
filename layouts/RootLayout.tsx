/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Heart, Home, LayoutGrid, Search, ShoppingCart, UserCircle2 } from 'lucide-react-native';
import { View } from 'tamagui';
import HomeScreenLayout from './HomeScreenLayout';
import ExploreScreenLayout from './ExploreScreenLayout';
import CartScreenLayout from './CartScreenLayout';
import FaviroutScreenLayout from './Favirouts';
import SearchScreenLayout from './SearchScreen';
import { useNavigationState } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const RootScreen = () => {
  const routeName = useNavigationState(state => {
    const route = state.routes[state.index];
    return route.name;
  });

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#FBBC05',
      headerShown: true,
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
        display: route.name === 'Detail' ? 'none' : 'flex',
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
    })}>
      <Tab.Screen name="HomeLayout" component={HomeScreenLayout} options={{
        title: 'Homee',
        headerShown: false,
        tabBarIcon: ({ color }) => <Home size={24} color={color} />,
      }}
      />
      <Tab.Screen name="ExploreLayout" component={ExploreScreenLayout} options={{
        title: 'Trending Deals',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <LayoutGrid
            size={24}
            color={color}
          />
        ),
      }} />
      <Tab.Screen name="CartLayout" component={CartScreenLayout} options={{
        title: 'Cart',
        headerShown: false,
        tabBarIcon: () => (
          <View bg="white" p="$3" br="$9">
            <ShoppingCart
              size={24}
              color={'#05A845'}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="FavioutsLayout" component={FaviroutScreenLayout} options={{
        title: 'Faviouts',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Heart
            size={24}
            color={color}
          />
        ),
      }} />
      <Tab.Screen name="SearchLayout" component={SearchScreenLayout} options={{
        title: 'Search',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <UserCircle2
            size={24}
            color={color}
          />
        ),
      }} />
    </Tab.Navigator>
  );
};

export default RootScreen;
