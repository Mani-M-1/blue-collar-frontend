import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 


const NotificationPage = () => {
  const navigation = useNavigation();

  return(
    <View >
        <Text style={styles.text}>Notifications</Text>
        <Text style={styles.private}>Push Notifications</Text>
        <View style={styles.header}>
           <Text style={styles.private}>Pause All</Text>
           <FontAwesome name="toggle-on" size={24} color="black" />    
            </View>
            <Text>Temporarily pause all Notifications</Text>
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
export default NotificationPage;