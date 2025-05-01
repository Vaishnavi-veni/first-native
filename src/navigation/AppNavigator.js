import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';  // Import your screens here
import AnotherScreen from '../screens/AnotherScreen';
import Landing from '../screens/landingScree';
import LandingScreen from '../screens/landingScree';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Another" component={AnotherScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        {/* <Stack.Screen name='Login' component={Login} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
