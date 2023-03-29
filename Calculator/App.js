import { View } from "react-native";
import { styles } from "./MGFiles/Styles";
import MainScreen from "./MGFiles/MainScreen";
import React from "react";
import Calculator from "./MGFiles/Calculator";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Calculator" component={Calculator} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer> 
  );
}

