import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: '', headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{title: '', headerShown: false}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
