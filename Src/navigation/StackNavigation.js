
import  React, { Profiler } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Gatstart from '../screens/Gatstart';
import Profile from '../screens/Profile';
import Edit from '../screens/Edit';
import Tabnavigation from './Tabnavigation';


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tabnavigation'>
     <Stack.Screen name="Tabnavigation" component={Tabnavigation}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;