import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Product from './pages/Products/';
import Detail from './pages/Detail';

function App() {
  
const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Product' component={Product} options={{
            title:'Store',
            headerTintColor:'white',
            headerStyle:{backgroundColor:'#607274'}
          }}/>
          <Stack.Screen name='Detail' component={Detail} options={{
            title:'Detay',
            headerTintColor:'white',
            headerStyle:{backgroundColor:'#607274'}
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
