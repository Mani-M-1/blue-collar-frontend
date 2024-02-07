import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Welcome = () => {
  const navigation = useNavigation();

  const userId = localStorage.getItem('userId');


  const handleOnPressJobProvider = async () => {

    const url = `http://localhost:8080/signup/addRole/${userId}`;
    const body = { role: 'jobprovider' }
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }

    const response = await fetch(url, options);

    const data = await response.json();

    if (!response.ok) {
      alert(response.err_msg);
    }
    else {
      localStorage.setItem("role", data.role);
      navigation.navigate('JobProvider')
    }
  }

  const handleOnPressJobSeeker = async () => {
    const url = `http://localhost:8080/signup/addRole/${userId}`;
    const body = { role: 'jobseeker' }
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }

    const response = await fetch(url, options);

    const data = await response.json();

    if (!response.ok) {
      alert(response.err_msg);
    }
    else {
      localStorage.setItem("role", data.role);
      navigation.navigate('JobSeeker')
    }
  }

  return (

    <View style={styles.welcomepage}>
      <Image style={styles.image} source={require('../assets/job.jpeg')} />
      <Text style={{ fontWeight: 'bold', fontSize: 40, padding: 20 }}>Welcome!</Text>
      {/* <Image src={require('blue-collar-job/assets/job-searching.jpeg')} /> */}


      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Search Your Category</Text>
      <Pressable style={styles.providerbutton} onPress={handleOnPressJobProvider}>
        <Text style={{ fontSize: 20 }}>Job Provider</Text>
      </Pressable>
      <Pressable style={styles.seekerbutton} onPress={handleOnPressJobSeeker}>
        <Text style={{ fontSize: 20 }}>Job Seeker</Text>
      </Pressable>



      {/* <Text style={{fontWeight:'bold'}}>Signin</Text> */}

    </View>
  )
}

const styles = StyleSheet.create({
  welcomepage: {
    alignItems: 'center',
    padding: 20,
    // justifyContent: 'center',
    paddingTop: 120,
    flex: 1
  },

  providerbutton: {
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: '#E7905F',
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seekerbutton: {
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: '#E7905F',
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 430,
    height: 290,
  }

})
export default Welcome;