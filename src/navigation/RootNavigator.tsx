import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Welcome } from '../screens/welcome';
import { Home } from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Product } from '../screens/productDetails';
import { Splash } from '../screens/splash';

export type RootStackParamList = {
  Welcome: undefined;
  HomeStack: undefined;
  HomeTabs: undefined;
  Product: undefined;
};

export type MainStackScreenProp = StackNavigationProp<
  RootStackParamList,
  'Welcome' | 'HomeStack' | 'HomeTabs' | 'Product'
>;

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
    </Stack.Navigator>
  );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeTabs" component={BottomTabsNavigator} />
      <HomeStack.Screen name="Product" component={Product} />
    </HomeStack.Navigator>
  );
};

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabs.Screen name="Home" component={Home} />
    </BottomTabs.Navigator>
  );
};

export default RootNavigator;
