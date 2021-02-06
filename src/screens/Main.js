import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function Main() {
  const {isLogin} = useSelector((state) => state);

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{title: '', headerShown: false}}
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{title: '', headerShown: false}}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
