import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 


const HelpPage = () => {
  const navigation = useNavigation();

  return(
    <View >
        <Text style={{fontWeight:'bold',fontSize:28,padding:20, alignSelf:'center'}}>Help</Text>
        <Text style={{fontWeight:'bold', fontSize:26, padding:20}}>Report A Problem</Text>
        <Text style={{fontWeight:'bold', fontSize:26, padding:20}}>Help Center</Text>
        <Text style={{fontWeight:'bold', fontSize:26, padding:20}}>Privacy And Security Help</Text>
        <Text style={{fontWeight:'bold', fontSize:26, padding:20}}>Support Request</Text>

    </View>
    
    
  )
}
const styles = StyleSheet.create({
    text:{
        marginTop: 40,
        alignSelf: 'center',
        fontWeight:'bold',
        fontSize:30

    },
    private: {
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    header: {
            flexDirection: 'row',
            alignItems: 'center',
             justifyContent: 'flex-end',
            padding: 20,
            marginRight: 150,
         },
    account: {
       alignItems: 'center',
       fontWeight: 'normal', 
       fontSize: 22,
       padding: 10
    }
})
export default HelpPage;