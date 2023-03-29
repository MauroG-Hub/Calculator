import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity  } from 'react-native';
import { styles } from './Styles';
import React from 'react';



const MainScreen = ({navigation}) => {

  const handlePress = () => {
    navigation.navigate('Calculator');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Welcome to</Text>
      <Text style={styles.subtitle} >My Calculator</Text>
      <Image
        style={styles.image}
        source={require('../assets/Logo.jpg')}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <Text style={styles.footer} >By Mauro G</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default MainScreen;

