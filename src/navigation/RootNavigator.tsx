import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/welcome';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
