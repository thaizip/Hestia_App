import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createDrawerNavigator();

import Index from './screens/Index';
import Explorar from './screens/Explorar';
export default function Rotas() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Index" component={Index} />
        <Tab.Screen name="Explorar" component={Explorar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}