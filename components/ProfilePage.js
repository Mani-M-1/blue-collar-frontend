// // ProfilePage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import AccountPage from '../src/AccountPage';


// import ImagePicker from 'react-native-image-picker';

const ProfilePage = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Image style={styles.image}  source={require('../assets/Sriram Pic.jpeg')} />
      <Text style={styles.text}>k.Sriram</Text>
      <View style={styles.header}>
         <MaterialCommunityIcons name="shield-account" size={30} color="black"  />
            <Pressable style={styles.account} onPress={() =>  navigation.navigate('AccountPage')}>
                 <Text style={styles.account}>Account</Text>
            </Pressable>
      </View>
      <View style={styles.header}>
         <MaterialIcons name="notifications-active" size={30} color="black" /> 
            <Pressable style={styles.account} onPress={() =>  navigation.navigate('NotificationPage')}>
                <Text style={styles.account}>Notifications</Text>
             </Pressable>
      </View>
      <View style={styles.header}>
           <MaterialIcons name="privacy-tip" size={30} color="black" /> 
              <Pressable style={styles.account} onPress={() =>  navigation.navigate('PrivacyPage')}>
                 <Text style={styles.account}>Privacy</Text>
             </Pressable>   
      </View>
      <View style={styles.header}>
          <MaterialCommunityIcons name="help-circle-outline" size={30} color="black" />
          <Pressable style={styles.account} onPress={() =>  navigation.navigate('HelpPage')}>
             <Text style={styles.account}>Help</Text>
             </Pressable>   
      </View>
      <View style={styles.header}>
          <MaterialIcons name="logout" size={30} color="black" />
          <Pressable style={styles.account} onPress={() =>  navigation.navigate('LogoutPage')}>
            <Text style={styles.account}>LogOut</Text>
          </Pressable>   
      </View>
    </View>
  );
 };

 
 


 const styles = StyleSheet.create({

  image:{
    padding: 20,
    // alignItems: 'center',
    // marginLeft: 10,
   // justifyContent: 'center',
    // paddingTop: 120,
    marginTop: 40,
    flex:1,
    width:120,
    height:120,
    alignSelf: 'center',
    borderRadius: 15,
 },
 text: {
  padding: 20,
  alignSelf: 'center',
  fontSize: 20,
  fontWeight: 'bold',
 },
 header:{
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 20,
    marginLeft: 40
  
 },
 account: {
  alignSelf: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginLeft: 15, // Adjust as needed


 }
 })

  export default ProfilePage;