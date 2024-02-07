import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const Signin = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const storingUserDetailsInLocalStorage = (userDetails) => {
      const {userId, email, jwtToken} = userDetails;
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email);
    }
  
    const postSignin = async () => {
      try {

        if (email.length > 0 && password.length > 0) {
          const response = await fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          else{
            const data = await response.json();
            console.log('Signin successful:', data);

            storingUserDetailsInLocalStorage(data.userDetails);

            navigation.navigate('Welcome')
          }
        }
    
        
      } catch (error) {
        console.error('Error while posting signup data:', error.message);
      }
    };
   

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View style={styles.signinpage}>
            <Text style={{fontWeight:'bold',fontSize:40}}>Sign-In</Text>
            <TextInput
               style={styles.emailinput}
               placeholder='Email'
               onChangeText={(text) => setEmail(text)}
               />
             <TextInput
               style={styles.passwordinput}
               placeholder='Password'
               onChangeText={(text) => setPassword(text)}
               />
            <Text style={{color: '#2305D8', fontWeight:'bold'}}>ForgetPassword?</Text>
            <Pressable style={styles.submitbutton} onPress={postSignin }>
                    <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    signinpage: {
        alignItems: 'center',
       paddingTop: 150,
       flex:1
    },
    
    emailinput: {
        borderColor: 'grey',
        paddingHorizontal:10,
        borderWidth: 2,
        height: 60,
        width:300,
        marginTop:50,
        borderRadius: 20,

    },
    passwordinput: {
        borderColor: 'grey',
        paddingHorizontal: 10,
        padding: 10,
        borderWidth: 2,
        marginTop:30,
        height: 60,
        width:300,
        borderRadius: 20,

    },
    submitbutton:{
        marginTop:40,
        borderRadius: 20,
        backgroundColor: '#575EFF',
        height: 60,
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
  },
  

})
export default Signin;