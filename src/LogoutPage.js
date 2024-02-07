import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 


const LogoutPage = () => {
  const navigation = useNavigation();

  return(
    <View >
        <Text style={{fontWeight:'bold',fontSize:28,padding:20, alignSelf:'center'}}>Log-Out</Text>
       <Text style={{fontWeight:'normal', fontSize:30, alignSelf:'center', padding: 20}}>We'll save the login info for Sriram, so you won't need to enter it next time you log in.</Text>
    </View>
    
    
  )
}

export default LogoutPage;