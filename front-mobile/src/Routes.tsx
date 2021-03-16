import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./Home";
import Orders from "./Orders";
import OrderDatails from './OrderDetails';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            screenOptions={{
              cardStyle: {
                backgroundColor: '#FFF'  
              }  
            }}
          >              
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
          <Stack.Screen name="OrderDatails" component={OrderDatails}></Stack.Screen>
          </Stack.Navigator>  
        </NavigationContainer>
    )
}