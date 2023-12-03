import React from 'react';
import { Ionicons, MaterialCommunityIcons,Feather} from '@expo/vector-icons';
import { Image, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createDrawerNavigator();

import Index from './screens/Index';
import Explorar from './screens/Explorar';
import Listas from './screens/lista/Listas'
export default function Rotas() {

  return (
    <NavigationContainer>
      <Tab.Navigator  
      screenOptions={{
        drawerPosition:'right',
        drawerLabel:'bold',
        
    }} >
        <Tab.Screen name="Index" component={Index} 
            options={({ navigation }) => ({
                headerTitle: () => (
                  <Image source={require('../assets/logo.png')}/>
                ),
                drawerLabel: ({ colort }) => <Text style={{ color:"#212529", fontWeight:  'bold' }}>
                    { 'INDEX' }</Text>,
                headerRight: () => (
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.openDrawer()}
                  >
                    <MaterialCommunityIcons name="menu-open" size={35} color="black"
                    />
                  </TouchableOpacity>
                ),
                headerLeft: () => null,

                drawerIcon: ({ color, size }) => (
                    <Ionicons name={'home-outline' } size={25} color={'black'} />
                  ),
                
              })}
        />
        <Tab.Screen name="Explorar" component={Explorar} 
            options={({ navigation }) => ({
                headerTitle: () => (
                  <Image source={require('../assets/logo.png')}/>
                ),
                drawerLabel: ({  color }) => <Text style={{ color:"#212529",fontWeight: 'bold'  }}>
                {'EXPLORAR' }</Text>,
                headerRight: () => (
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.openDrawer()}
                  >
                    <MaterialCommunityIcons name="menu-open" size={35} color="black"
                    />
                  </TouchableOpacity>
                ),
                headerLeft: () => null,

                drawerIcon: ({ color, size }) => (
                    <Ionicons name={'ios-search-outline' } size={25} color={'black'} />
                  ),
                
              })}
        />
        <Tab.Screen name="Listas" component={Listas} 
            options={({ navigation }) => ({
                headerTitle: () => (
                  <Image source={require('../assets/logo.png')}/>
                ),
                drawerLabel: ({  color }) => <Text style={{ color:"#212529",fontWeight: 'bold'  }}>
                {'LISTAS' }</Text>,
                headerRight: () => (
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.openDrawer()}
                  >
                    <MaterialCommunityIcons name="menu-open" size={35} color="black"
                    />
                  </TouchableOpacity>
                ),
                headerLeft: () => null,

                drawerIcon: ({ color, size }) => (
                    <Feather name={'list' } size={25} color={'black'} />
                  ),
                
              })}
        />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}