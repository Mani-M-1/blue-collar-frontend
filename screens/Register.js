import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Register = () => {
  const navigation = useNavigation();
  // const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postSignup = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const response = await fetch('http://localhost:8080/signup', {
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
          console.log('Signup successful:', data);
          navigation.navigate('Signin')
        }
      }
  
      
    } catch (error) {
      console.error('Error while posting signup data:', error.message);
    }
  };
  const changeHandler = (val) => {
    setText(val);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigateToGoogleSignIn = () => {
    // Navigate to the Google Sign In page
    navigation.navigate('GoogleSignInPage');
  };

  return (
    <View style={styles.registernowpage}>
      <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Register Now</Text>
      <TextInput
        style={styles.emailinput}
        placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordinput}
          placeholder='Password'
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable onPress={togglePasswordVisibility}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color='black'
          />
        </Pressable>
      </View>
      
       <Pressable style={styles.registerbutton} onPress={postSignup}>
        <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
      </Pressable>
      <Pressable style={styles.signingoogle} onPress={navigateToGoogleSignIn}>
        <FontAwesome5 name="google" size={24} color="black" style={styles.googleIcon} />
        <Text style={{ fontWeight: 'semibold' }}>Sign in with Google</Text>
      </Pressable>
      <Text>
        Have already an account?
        <Pressable style={styles.signinwith} onPress={() => navigation.navigate('Signin')}>
          Sign-In here
        </Pressable>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  registernowpage: {
    alignItems: 'center',
    paddingTop: 150,
    flex: 1,
  },

  emailinput: {
    borderColor: 'grey',
    paddingHorizontal: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    marginTop: 50,
    borderRadius: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    paddingHorizontal: 10,
    borderWidth: 2,
    marginTop: 30,
    height: 60,
    width: 300,
    borderRadius: 20,
  },
  passwordinput: {
    flex: 1,
  },
  registerbutton: {
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: '#575EFF',
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signingoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    height: 60,
    width: 300,
  },
  googleIcon: {
    marginRight: 20,
  },
  signinwith: {
    marginTop: 40,
    fontWeight: 'bold',
  },
});

export default Register;